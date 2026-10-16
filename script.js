
// MENU MOBILE

function toggleMenu() {
    const menu = document.getElementById("menu");

    menu.classList.toggle("active");
}
// FECHAR MENU AO CLICAR EM UM LINK

document.querySelectorAll("#menu a").forEach(link => {

    link.addEventListener("click", () => {

        document
            .getElementById("menu")
            .classList.remove("active");

    });

});


// GRÁFICO DE DIFICULDADES

const difficultyCanvas =
    document.getElementById("difficultyChart");

new Chart(difficultyCanvas, {

    type: "bar",

    data: {

        labels: [
            "Disciplina A",
            "Disciplina B",
            "Disciplina C",
            "Disciplina D",
            "Disciplina E"
        ],

        datasets: [

            {
                label: "Alunos",

                data: [
                    18,
                    14,
                    11,
                    8,
                    5
                ],

                backgroundColor: [
                    "#3978ff",
                    "#5590ff",
                    "#73a5ff",
                    "#91baff",
                    "#aecaff"
                ],

                borderRadius: 7

            }

        ]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {
                display: false
            }

        },

        scales: {

            y: {

                beginAtZero: true,

                ticks: {
                    stepSize: 5
                }

            }

        }

    }

});


// GRÁFICO DE EXPECTATIVA PROFISSIONAL

const careerCanvas =
    document.getElementById("careerChart");

new Chart(careerCanvas, {

    type: "doughnut",

    data: {

        labels: [
            "Pretendem trabalhar na área",
            "Ainda não decidiram",
            "Não pretendem"
        ],

        datasets: [

            {

                data: [
                    82,
                    13,
                    5
                ],

                backgroundColor: [
                    "#3978ff",
                    "#83a9ff",
                    "#dce7ff"
                ],

                borderWidth: 0

            }

        ]

    },

    options: {

        responsive: true,

        plugins: {

            legend: {

                position: "bottom"

            }

        }

    }

});


// BOTÃO DOS CURSOS

function comprarCurso(nomeCurso) {

    alert(
        `Você selecionou o curso:\n\n${nomeCurso}\n\n` +
        "Nesta versão do protótipo, esta área representa " +
        "a futura página de inscrição/pagamento."
    );

}