import Chart from "chart.js/auto";
import { actualMonth, actualYear, getPhotographers, getUserBanca } from "../js/user.js";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";

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

export const renderBarPessoal = async () => {
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

  if (window.barPessoalChartInstance) {
    window.barPessoalChartInstance.destroy();
  }

  window.barPessoalChartInstance = new Chart(ctx, {
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
      maintainAspectRatio: true,
      plugins: {
        legend: {
          labels: {
            color: "#ffffff",
            font: {
              size: (ctx) => {
                const width = ctx.chart.width;
                return Math.max(8, Math.min(width * 0.03, 24));
              },
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
              size: (ctx) => {
                const width = ctx.chart.width;
                if (width < 400) return 14;
                if (width < 600) return 16;
                return 20;
              },
            },
          },
        },
        x: {
          ticks: {
            color: "#fff",
            font: {
              size: (ctx) => {
                const width = ctx.chart.width;
                if (width < 400) return 14;
                if (width < 600) return 16;
                return 20;
              },
            },
          },
          // title: {
          //   display: true,
          //   text: "Dias",
          //   color: "#fff",
          //   font: {
          //     size: 20,
          //     weight: "normal",
          //   },
          // },
        },
      },
    },
  });
};

const getBancas = async (period) => {
  const ss = await getPhotographers("SS");
  const sarah = await getPhotographers("Sarah");
  const fly = await getPhotographers("fly");

  console.log(sarah);

  function filtrarPorDias(nome, banca, inicio, fim) {
    const revBanca = banca.filter((item) => {
      const [dia, mes] = item.data.split("/").map(Number);
      return dia >= inicio && dia <= fim;
    });

    const vendas = revBanca.reduce((ac, v) => ac + parseInt(v.vendas), 0);
    const sobras = revBanca.reduce((ac, s) => ac + parseInt(s.sobras), 0);
    const producao = parseInt(vendas) + parseInt(sobras);
    const aprov = (parseInt(vendas) / (parseInt(vendas) + parseInt(sobras))) * 100;

    if (isNaN(aprov)) return;

    return { nome, vendas, sobras, producao, aprov };
  }

  if (period === "mensal") {
    const rankingMensal = [ss, sarah, fly].map(({ user, data }) => {
      const vendas = data[actualYear()][actualMonth()].banca.reduce((ac, v) => ac + parseInt(v.vendas), 0);
      const sobras = data[actualYear()][actualMonth()].banca.reduce((ac, s) => ac + parseInt(s.sobras), 0);
      const producao = parseInt(vendas) + parseInt(sobras);
      const aprov = (parseInt(vendas) / (parseInt(vendas) + parseInt(sobras))) * 100;

      return { nome: user, vendas, sobras, producao, aproveitamento: aprov.toFixed(2) };
    });

    const fotografosOrdenados = rankingMensal.sort((a, b) => b.vendas - a.vendas);

    const nomes = fotografosOrdenados.map((i, idx) => {
      const medalha = ["🥇", "🥈", "🥉"][idx] || "📸";
      return `${medalha} ${i.nome}`;
    });

    const vendas = fotografosOrdenados.map((i) => i.vendas);
    const sobras = fotografosOrdenados.map((i) => i.sobras);
    const producao = fotografosOrdenados.map((i) => i.producao);
    const aproveitamentos = fotografosOrdenados.map((i) => i.aproveitamento);

    return { nomes, vendas, sobras, producao, aproveitamentos };
  } else {
    const firstWeek = [ss, sarah, fly].map(({ user, data }) =>
      filtrarPorDias(user, data[actualYear()][actualMonth()].banca, 1, 7)
    );
    const secondWeek = [ss, sarah, fly].map(({ user, data }) =>
      filtrarPorDias(user, data[actualYear()][actualMonth()].banca, 8, 15)
    );
    const thirdWeek = [ss, sarah, fly].map(({ user, data }) =>
      filtrarPorDias(user, data[actualYear()][actualMonth()].banca, 16, 22)
    );
    const fourthWeek = [ss, sarah, fly].map(({ user, data }) =>
      filtrarPorDias(user, data[actualYear()][actualMonth()].banca, 23, 31)
    );

    const ordenedWeek = (week) => {
      if (week[0] === undefined) return;

      console.log(week);
      const ordered = [...week].sort((a, b) => b.vendas - a.vendas);

      const medalha = ["🥇", "🥈", "🥉"] || "📸";
      return ordered.map((i, idx) => ({
        nomes: `${medalha[idx]} ${i?.nome ?? "vazio"}`,
        vendas: i?.vendas,
        sobras: i?.sobras,
        producao: i?.producao,
        aproveitamento: i?.aprov.toFixed(2),
      }));
    };

    const semanas = {
      firstWeek: ordenedWeek(firstWeek),
      secondWeek: ordenedWeek(secondWeek),
      thirdWeek: ordenedWeek(thirdWeek),
      fourthWeek: ordenedWeek(fourthWeek),
    };

    return semanas;
  }
};

export const renderBar = async () => {
  const ctx = document.getElementById("bar-chart").getContext("2d");

  const { nomes, vendas, sobras, producao, aproveitamentos } = await getBancas("mensal");

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
          hidden: true,
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
              size: (ctx) => {
                const width = ctx.chart.width;
                return Math.max(8, Math.min(width * 0.03, 24));
              },
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
        // title: {
        //   display: true,
        //   text: "Ranking",
        //   color: "#fff",
        //   font: {
        //     size: 18,
        //   },
        // },
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

export const renderSwiper = async () => {
  Swiper.use([Navigation, Pagination, Autoplay]);

  return new Swiper(".swiper", {
    loop: false, // slides infinitos
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
};

export const renderSlides = (week, id) => {
  if (!week) return false;

  const wrapper = document.getElementById("wrapper");

  if (document.getElementById(id)) {
    document.getElementById(id).remove();
    wrapper.innerHTML = "";
  }

  const swiperSlide = document.createElement("div");
  swiperSlide.classList.add("swiper-slide");
  swiperSlide.innerHTML = `<canvas
              id="${id}"
              class="semanal-charts"
              width="1200"
              height="800"
              style="max-width: 1200px; max-height: 800px"
            ></canvas>`;

  wrapper.appendChild(swiperSlide);
  return true;
};

export const renderSemanal = async () => {
  const { firstWeek, secondWeek, thirdWeek, fourthWeek } = await getBancas("semanal");

  if (window.firstChartInstance) window.firstChartInstance.destroy();
  if (window.secondChartInstance) window.secondChartInstance.destroy();
  if (window.thirdChartInstance) window.thirdChartInstance.destroy();
  if (window.fourthChartInstance) window.fourthChartInstance.destroy();

  if (renderSlides(firstWeek, "first-week")) {
    const nomes = firstWeek.map((n) => n.nomes);
    const vendas = firstWeek.map((n) => n.vendas);
    const sobras = firstWeek.map((n) => n.sobras);
    const producao = firstWeek.map((n) => n.producao);
    const aproveitamentos = firstWeek.map((n) => n.aproveitamento);

    window.firstChartInstance = new Chart(document.getElementById("first-week").getContext("2d"), {
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
            hidden: true,
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
                size: (ctx) => {
                  const width = ctx.chart.width;
                  return Math.max(8, Math.min(width * 0.03, 24));
                },
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
            text: "Primeira Semana (01 ao 07)",
            color: "#fff",
            font: {
              size: (ctx) => {
                const width = ctx.chart.width;
                return Math.max(8, Math.min(width * 0.03, 24));
              },
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
  }

  if (renderSlides(secondWeek, "second-week")) {
    const nomes = secondWeek.map((n) => n.nomes);
    const vendas = secondWeek.map((n) => n.vendas);
    const sobras = secondWeek.map((n) => n.sobras);
    const producao = secondWeek.map((n) => n.producao);
    const aproveitamentos = secondWeek.map((n) => n.aproveitamento);

    window.secondChartInstance = new Chart(document.getElementById("second-week").getContext("2d"), {
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
            hidden: true,
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
                size: (ctx) => {
                  const width = ctx.chart.width;
                  return Math.max(8, Math.min(width * 0.03, 24));
                },
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
            text: "Segunda Semana (08 ao 15)",
            color: "#fff",
            font: {
              size: (ctx) => {
                const width = ctx.chart.width;
                return Math.max(8, Math.min(width * 0.03, 24));
              },
              family: "JetBrains Mono",
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
  }

  if (renderSlides(thirdWeek, "third-week")) {
    const nomes = thirdWeek.map((n) => n.nomes);
    const vendas = thirdWeek.map((n) => n.vendas);
    const sobras = thirdWeek.map((n) => n.sobras);
    const producao = thirdWeek.map((n) => n.producao);
    const aproveitamentos = thirdWeek.map((n) => n.aproveitamento);

    window.thirdChartInstance = new Chart(document.getElementById("third-week").getContext("2d"), {
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
            hidden: true,
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
                size: (ctx) => {
                  const width = ctx.chart.width;
                  return Math.max(8, Math.min(width * 0.03, 24));
                },
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
            text: "Terceira Semana (15 ao 22)",
            color: "#fff",
            font: {
              size: (ctx) => {
                const width = ctx.chart.width;
                return Math.max(8, Math.min(width * 0.03, 24));
              },
              family: "JetBrains Mono",
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
  }

  if (renderSlides(fourthWeek, "fourth-week")) {
    const nomes = fourthWeek.map((n) => n.nomes);
    const vendas = fourthWeek.map((n) => n.vendas);
    const sobras = fourthWeek.map((n) => n.sobras);
    const producao = fourthWeek.map((n) => n.producao);
    const aproveitamentos = fourthWeek.map((n) => n.aproveitamento);

    window.fourthChartInstance = new Chart(document.getElementById("fourth-week").getContext("2d"), {
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
            hidden: true,
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
                size: (ctx) => {
                  const width = ctx.chart.width;
                  return Math.max(8, Math.min(width * 0.03, 24));
                },
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
            text: "Quarta Semana (23 ao 31)",
            color: "#fff",
            font: {
              size: (ctx) => {
                const width = ctx.chart.width;
                return Math.max(8, Math.min(width * 0.03, 24));
              },
              family: "JetBrains Mono",
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
  }
};

export const resetCharts = () => {
  const charts = document.getElementById("charts");
  const rankChoice = document.getElementById("ranking-choice");
  const rankingSemanal = document.getElementById("ranking-semanal");
  const rankingDiv = document.getElementById("ranking-chart");
  charts.style.marginTop = "0";
  rankingDiv.style.marginTop = "0";

  if (window.DoughnutChartInstance) window.DoughnutChartInstance.destroy();
  if (window.barPessoalChartInstance) window.barPessoalChartInstance.destroy();
  if (window.barChartInstance) window.barChartInstance.destroy();
  if (window.firstChartInstance) window.firstChartInstance.destroy();
  if (window.secondChartInstance) window.secondChartInstance.destroy();
  if (window.thirdChartInstance) window.thirdChartInstance.destroy();
  if (window.fourthChartInstance) window.fourthChartInstance.destroy();
  charts.classList.remove("visible");
  rankChoice.classList.remove("visible");
  rankingSemanal.classList.remove("visible");
  rankingDiv.classList.remove("visible");
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
