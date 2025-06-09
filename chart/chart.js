import Chart from "chart.js/auto";
import { getPhotographers, getUserBanca } from "../js/user.js";

// Registra tudo que o doughnut precisa

const ctx = document.getElementById("doughnut-chart").getContext("2d");

export const renderDoughnut = (producao, vendas, sobras) => {
  // Dados que você pode mudar

  if (window.DoughnutChartInstance) window.DoughnutChartInstance.destroy();

  const data = {
    labels: ["Produção", "Vendas", "Sobras"],
    datasets: [
      {
        data: [producao, vendas, sobras],
        backgroundColor: ["rgba(53, 195, 220, 0.7)", "rgba(54, 235, 114, 0.8)", "rgba(255, 86, 86, 0.8)"],
        borderColor: "#222",
        borderWidth: 2,
        hoverOffset: 30,
      },
    ],
  };

  // Plugin para desenhar texto no centro do doughnut

  window.DoughnutChartInstance = new Chart(ctx, {
    type: "doughnut",
    data,
    options: {
      responsive: true,
      maintainAspectRatio: true,
      cutout: "50%",
      layout: {
        padding: {
          top: 20,
          bottom: 50,
          left: 20,
          right: 20,
        },
      },
      plugins: {
        legend: {
          position: "top",
          labels: {
            color: "#ffffff",
            font: {
              size: 20,
              weight: "400",
              family: "JetBrains Mono",
            },
          },
          padding: 40,
        },
        tooltip: {
          enabled: true,
          mode: "nearest",
          intersect: true,
          callbacks: {
            title: (context) => context[0].label,
            label: (context) => `Quantidade: ${context.parsed}`,
          },
          bodyFont: { size: 14 },
          titleFont: { size: 16, weight: "bold", family: "JetBrains Mono" },
        },
      },
      animation: {
        animateScale: true,
        duration: 1500,
        easing: "easeOutBounce",
      },
    },
  });
};

const getOrdenedBanca = (banca) => {
  const bancaOrdenada = banca.sort((a, b) => {
    const [diaA, mesA] = a.data.split("/").map(Number);
    const [diaB, mesB] = b.data.split("/").map(Number);
    return new Date(2025, mesA - 1, diaA) - new Date(2025, mesB - 1, diaB);
  });

  const vendas = bancaOrdenada.map((v) => v.vendas);
  const datas = bancaOrdenada.map((d) => d.data);
  const sobras = bancaOrdenada.map((s) => s.sobras);
  const producao = bancaOrdenada.map((p) => parseInt(p.vendas) + parseInt(p.sobras));

  return { vendas, datas, sobras, producao };
};

export const renderLine = async () => {
  const ctx = document.getElementById("line-chart").getContext("2d");
  const element = document.getElementById("line-chart");

  const { banca } = await getUserBanca();
  const { vendas, datas, sobras, producao } = getOrdenedBanca(banca);

  if (vendas.length < 5) {
    element.style.display = "none";
    return; // 🛑 Sai fora sem tentar criar o gráfico!
  } else {
    element.style.display = "block"; // Garante que ele volte se necessário
  }

  if (window.lineChartInstance) {
    window.lineChartInstance.destroy();
  }

  window.lineChartInstance = new Chart(ctx, {
    // ["rgba(53, 195, 220, 0.7)",
    // "rgba(54, 235, 114, 0.8)",
    // "rgba(255, 86, 86, 0.8)"]

    type: "bar",
    data: {
      labels: datas,
      datasets: [
        {
          label: "Vendas",
          data: vendas,
          borderColor: "rgb(54, 235, 114)",
          backgroundColor: "rgba(54, 235, 114, 0.86)",
          borderWidth: 1,
          borderRadius: 8,
          hoverBackgroundColor: "#fff",
          hoverBorderWidth: 0,
        },
        {
          label: "Sobras",
          data: sobras,
          borderColor: "rgb(255, 86, 86)",
          backgroundColor: "rgba(255, 86, 86, 0.79)",
          borderWidth: 1,
          borderRadius: 8,
          hoverBackgroundColor: "#fff",
          hoverBorderWidth: 0,
        },
        {
          label: "Produção",
          data: producao,
          borderColor: "rgb(41, 71, 236)",
          backgroundColor: "rgba(41, 70, 236, 0.84)",
          borderWidth: 1,
          borderRadius: 8,
          hoverBackgroundColor: "#fff",
          hoverBorderWidth: 0,
        },
      ],
    },
    options: {
      indexAxis: "x",
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: "#ffffff",
            font: {
              size: 20,
              weight: "400",
              family: "JetBrains Mono",
            },
          },
        },
        tooltip: {
          titleColor: "#fff",
          bodyColor: "#fff",
          footerColor: "#fff",
          mode: "index",
          intersect: false,
          callbacks: {
            label: (ctx) => `${ctx.dataset.label}: ${ctx.formattedValue}.`,
          },
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: "#fff",
            stepSize: 5,
            font: {
              size: 14,
            },
          },
        },
        x: {
          ticks: {
            color: "#fff",
            font: {
              size: 14,
            },
          },
          title: {
            display: true,
            text: "Dias",
            color: "#fff",
            font: {
              size: 20,
              weight: "normal",
            },
          },
        },
      },
    },
  });
};

export const renderBar = async () => {
  const ctx = document.getElementById("bar-chart").getContext("2d");

  const ss = await getPhotographers("SS");
  const sarah = await getPhotographers("Sarah");
  const fly = await getPhotographers("fly");

  const fotografos = [ss, sarah, fly].map((fotografo) => {
    const vendas = fotografo.banca.reduce((ac, v) => ac + parseInt(v.vendas), 0);
    const sobras = fotografo.banca.reduce((ac, s) => ac + parseInt(s.sobras), 0);
    const producao = parseInt(vendas) + parseInt(sobras);
    const aprov = (parseInt(vendas) / (parseInt(vendas) + parseInt(sobras))) * 100;

    return { nome: fotografo.user, vendas, sobras, producao, aproveitamento: aprov.toFixed(2) };
  });

  const fotografosOrdenados = fotografos.sort((a, b) => b.vendas - a.vendas);

  const nomes = fotografosOrdenados.map((i, idx) => {
    const medalha = ["🥇", "🥈", "🥉"][idx] || "📸";
    return `${medalha} ${i.nome}`;
  });
  const vendas = fotografosOrdenados.map((i) => i.vendas);
  const sobras = fotografosOrdenados.map((i) => i.sobras);
  const producao = fotografosOrdenados.map((i) => i.producao);
  const aproveitamentos = fotografosOrdenados.map((i) => i.aproveitamento);

  if (window.barChartInstance) {
    window.barChartInstance.destroy();
  }

  window.barChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: nomes,
      datasets: [
        {
          label: "Vendas",
          data: vendas,
          backgroundColor: "rgba(75, 192, 192, 0.9)",
          borderColor: "rgb(51, 228, 228)",
          borderWidth: 1,
          borderWidth: 1,
          borderRadius: 8,
          hoverBackgroundColor: "#fff",
          hoverBorderWidth: 0,
        },
        {
          label: "Sobras",
          data: sobras,
          backgroundColor: "rgba(255, 99, 133, 0.8)",
          borderColor: "rgb(255, 52, 96)",
          borderWidth: 1,
          borderWidth: 1,
          borderRadius: 8,
          hoverBackgroundColor: "#fff",
          hoverBorderWidth: 0,
        },
        {
          label: "Produção",
          data: producao,
          backgroundColor: "rgba(45, 76, 250, 0.9)",
          borderColor: "rgb(41, 80, 255)",
          borderWidth: 1,
          borderWidth: 1,
          borderRadius: 8,
          hoverBackgroundColor: "#fff",
          hoverBorderWidth: 0,
        },
      ],
    },
    options: {
      indexAxis: "x", // Horizontal ranking
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#fff",
            font: {
              size: 20,
              family: "JetBrains Mono",
            },
          },
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const index = context.dataIndex;
              const label = context.dataset.label;
              const valor = context.raw;
              const aproveitamento = aproveitamentos[index];
              return `${label}: ${valor} | Aproveitamento: ${aproveitamento}%`;
            },
          },
        },
        title: {
          display: true,
          text: "Ranking",
          color: "#fff",
          font: {
            size: 18,
          },
        },
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            color: "#fff",
            font: {
              size: (ctx) => {
                const width = ctx.chart.width;
                if (width < 400) return 14;
                if (width < 600) return 16;
                return 20;
              },
              family: "JetBrains Mono",
            },
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
        y: {
          ticks: {
            color: "#fff",
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
      },
    },
  });
};

document.addEventListener("DOMContentLoaded", () => {
  const btnGraficos = document.getElementById("gerarGraficos");
  const chartsDiv = document.getElementById("charts");

  btnGraficos.addEventListener("click", () => {
    smoothScrollTo(chartsDiv, 1000); // 1000ms de rolagem suave
  });
});

export function smoothScrollTo(targetY, duration) {
  const realTarget = targetY.getBoundingClientRect().top + window.pageYOffset - 20;
  const startY = window.pageYOffset;
  const distance = realTarget - startY;
  const startTime = performance.now();

  function animation(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = easeInOutQuad(progress);

    window.scrollTo(0, startY + distance * ease);

    if (elapsed < duration) {
      requestAnimationFrame(animation);
    }
  }

  requestAnimationFrame(animation);
}

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}
