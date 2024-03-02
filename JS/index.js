const coords = { x: 0, y: 0 };
            const circles = document.querySelectorAll(".circle");

            const colors = [
            "#0000ff", 
            "#0033cc",
            "#0066cc",
            "#0099cc",
            "#00cccc",
            "#00ffff",
            "#00ffcc",
            "#00ff99",
            "#00ff66",
            "#00ff33",
            "#00ff00",
            "#33ff00",
            "#66ff00",
            "#99ff00",
            "#ccff00",
            "#ffff00",
            "#ffcc00",
            "#00ced1",
            "#20b2aa",
            "#40e0d0",
            ];

            circles.forEach(function (circle, index) {
            circle.x = 0;
            circle.y = 0;
            circle.style.backgroundColor = colors[index % colors.length];
            });

            window.addEventListener("mousemove", function(e){
            coords.x = e.clientX;
            coords.y = e.clientY;
            
            });

            function animateCircles() {
            
            let x = coords.x;
            let y = coords.y;
            
            circles.forEach(function (circle, index) {
                circle.style.left = x - 12 + "px";
                circle.style.top = y - 12 + "px";
                
                circle.style.scale = (circles.length - index) / circles.length;
                
                circle.x = x;
                circle.y = y;

                const nextCircle = circles[index + 1] || circles[0];
                x += (nextCircle.x - x) * 0.3;
                y += (nextCircle.y - y) * 0.3;
            });
            
            requestAnimationFrame(animateCircles);
            }

            animateCircles();
