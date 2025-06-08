import Chart from "chart.js/auto";
import { getUserBanca } from "../js/user.js";

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

export const renderLine = async () => {
  const ctx = document.getElementById("line-chart").getContext("2d");
  const element = document.getElementById("line-chart");

  const { banca } = await getUserBanca();
  const vendas = banca.map((v) => v.vendas);
  const datas = banca.map((d) => d.data);
  const sobras = banca.map((s) => s.sobras);
  const producao = banca.map((p) => p.vendas + p.sobras);

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

    type: "line",
    data: {
      labels: datas,
      datasets: [
        {
          label: "Vendas",
          data: vendas,
          borderColor: "rgb(54, 235, 114)",
          backgroundColor: "rgb(54, 235, 114)",
          tension: 0.2,
          fill: false,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointHoverBorderColor: "white",
          pointHoverBorderWidth: 3,
        },
        {
          label: "Sobras",
          data: sobras,
          borderColor: "rgb(255, 86, 86)",
          backgroundColor: "rgb(255, 86, 86)",
          tension: 0.2,

          fill: false,
          pointRadius: 5,
          pointHoverRadius: 7,
          pointHoverBorderColor: "white",
          pointHoverBorderWidth: 3,
        },
        {
          label: "Produção",
          data: producao,
          borderColor: "rgb(53, 195, 220)",
          backgroundColor: "rgb(53, 195, 220)",
          tension: 0.2,

          fill: false,
          pointRadius: 5,
          pointHoverBorderWidth: 3,
          pointHoverRadius: 7,
          pointHoverBorderColor: "white",
          pointHoverBorderWidth: 3,
        },
      ],
    },
    options: {
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
              size: 12,
            },
          },
          title: {
            display: true,
            text: "Unidades",
            color: "#fff",
            font: {
              size: 20,
              weight: "normal",
            },
          },
        },
        x: {
          ticks: {
            color: "#fff",
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
  const element = document.getElementById("bar-chart");

  const { banca } = await getUserBanca();
  const vendas = banca.map((v) => v.vendas);
  const sobras = banca.map((s) => s.sobras);
  const producao = banca.map((p) => parseInt(p.vendas) + parseInt(p.sobras));
  const datas = banca.map((d) => d.data);

  if (vendas.length < 5) {
    element.style.display = "none";
    return; // 🛑 Sai fora sem tentar criar o gráfico!
  } else {
    element.style.display = "block"; // Garante que ele volte se necessário
  }

  if (window.barChartInstance) {
    window.barChartInstance.destroy();
  }

  window.barChartInstance = new Chart(ctx, {
    type: "bar",
    data: {
      labels: datas,
      datasets: [
        {
          label: "Vendas",
          data: vendas,
          backgroundColor: "rgba(75, 192, 192, 0.9)",
          borderColor: "rgba(75, 192, 192, 1)",
          borderWidth: 1,
          borderRadius: 10, // Deixa as barras arredondadas
          hoverBackgroundColor: "#fff",
          hoverBorderColor: "#4bc0c0",
        },
        {
          label: "Sobras",
          data: sobras,
          backgroundColor: "rgba(255, 86, 86, 0.6)",
          borderColor: "rgba(255, 86, 86, 1)",
          borderWidth: 1,
          borderRadius: 10, // Deixa as barras arredondadas
          hoverBackgroundColor: "#fff",
          hoverBorderColor: "#4bc0c0",
        },
        {
          label: "Produção",
          data: producao,
          backgroundColor: "rgba(53, 195, 220, 0.6)",
          borderColor: "rgba(53, 195, 220, 1)",
          borderWidth: 1,
          borderRadius: 10, // Deixa as barras arredondadas
          hoverBackgroundColor: "#fff",
          hoverBorderColor: "#4bc0c0",
        },
        // {
        //   label: "Aproveitamento (%)",
        //   data: aproveitamento,
        //   borderColor: "#f5d300",
        //   backgroundColor: "#f5d300",
        //   borderWidth: 2,
        //   tension: 1,
        //   yAxisID: "y1",
        //   fill: false,
        //   pointRadius: 5,
        //   pointHoverRadius: 7,
        // },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          labels: {
            color: "#fff", // cor do texto da legenda
            font: {
              size: 14,
            },
          },
        },
        tooltip: {
          callbacks: {
            label: (context) => `${context.dataset.label}: ${context.parsed.y}`,
          },
        },
        title: {
          display: true,
          text: "Vendas por Dia",
          color: "#fff",
          font: {
            size: 18,
          },
        },
      },
      scales: {
        x: {
          ticks: {
            color: "#fff",
          },
          grid: {
            color: "rgba(255, 255, 255, 0.1)",
          },
        },
        y: {
          beginAtZero: true,
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
