// MENU MOBILE
function toggleMenu() {
    document.getElementById("menu").classList.toggle("active");
}
document.querySelectorAll("#menu a").forEach(link =>
    link.addEventListener("click", () => document.getElementById("menu").classList.remove("active"))
);

// INDICAÇÕES (EXEMPLOS: troque pelos itens reais do grupo)
const indicacoes = [
    { tipo: "Professores",     titulo: "Professor de Matemática",   texto: "Explica funções e geometria passo a passo.", link: "#" },
    { tipo: "Professores",     titulo: "Professora de Português",   texto: "Dicas de gramática, interpretação e redação.", link: "#" },
    { tipo: "Influenciadores", titulo: "Criador de conteúdo: Ciências", texto: "Biologia e química em vídeos curtos.", link: "#" },
    { tipo: "Influenciadores", titulo: "Criadora de conteúdo: História", texto: "Resumos rápidos para revisar antes da prova.", link: "#" },
    { tipo: "Canais do YouTube", titulo: "Canal de Física",        texto: "Videoaulas completas e exercícios resolvidos.", link: "#" },
    { tipo: "Canais do YouTube", titulo: "Canal de Redação",       texto: "Como estruturar um texto dissertativo.", link: "#" }
];
const tipos = ["Todos", ...new Set(indicacoes.map(i => i.tipo))];
let filtroAtual = "Todos";

function renderIndicacoes() {
    const filters = document.getElementById("filters");
    filters.innerHTML = tipos.map(t =>
        `<button class="${t === filtroAtual ? "on" : ""}" data-tipo="${t}">${t}</button>`).join("");
    filters.querySelectorAll("button").forEach(b =>
        b.addEventListener("click", () => { filtroAtual = b.dataset.tipo; renderIndicacoes(); }));

    document.getElementById("cards").innerHTML = indicacoes
        .filter(i => filtroAtual === "Todos" || i.tipo === filtroAtual)
        .map(i => `<article class="course">
            <span class="type">${i.tipo}</span>
            <h3>${i.titulo}</h3>
            <p>${i.texto}</p>
            <button onclick="abrirIndicacao('${i.titulo}')">Ver indicação</button>
        </article>`).join("");
}
function abrirIndicacao(titulo) {
    alert(`Indicação: ${titulo}\n\nNesta versão do protótipo, aqui abrirá o link do conteúdo.`);
}
renderIndicacoes();

// GRÁFICOS
new Chart(document.getElementById("difficultyChart"), {
    type: "bar",
    data: {
        labels: ["Disciplina A", "Disciplina B", "Disciplina C", "Disciplina D", "Disciplina E"],
        datasets: [{ label: "Alunos", data: [18, 14, 11, 8, 5],
            backgroundColor: ["#4a6b5a", "#6b8f80", "#8fae9d", "#b9cdb8", "#d5dfd6"], borderRadius: 8 }]
    },
    options: { responsive: true, plugins: { legend: { display: false } },
        scales: { y: { beginAtZero: true, ticks: { stepSize: 5 } } } }
});

new Chart(document.getElementById("careerChart"), {
    type: "doughnut",
    data: {
        labels: ["Pretendem trabalhar na área", "Ainda não decidiram", "Não pretendem"],
        datasets: [{ data: [82, 13, 5], backgroundColor: ["#4a6b5a", "#b9cdb8", "#f5a623"], borderWidth: 0 }]
    },
    options: { responsive: true, plugins: { legend: { position: "bottom" } } }
});
