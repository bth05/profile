document.addEventListener("DOMContentLoaded", function () {
    const ctx = document.getElementById("gpaChart").getContext("2d");

    new Chart(ctx, {
        type: "bar",
        data: {
            labels: ["Học kỳ 1", "Học kỳ 2", "Học kỳ 3"],
            datasets: [{
                label: "GPA",
                data: [2.8, 3.31, 3.79], // Dữ liệu GPA
                backgroundColor: ["#ff6384", "#36a2eb", "#ffce56"],
                borderColor: "#333",
                borderWidth: 1
            }]
        },
        options: {
            responsive: false, // Ngăn tự động co dãn
            maintainAspectRatio: false, // Vô hiệu hóa tỷ lệ khung hình cố định
            scales: {
                y: {
                    beginAtZero: true,
                    max: 4.0,
                    title: {
                        display: true,
                        text: "GPA (0 - 4.0)"
                    }
                },
                x: {
                    title: {
                        display: true,
                        text: "Học kỳ"
                    }
                }
            }
        }
    });    
});