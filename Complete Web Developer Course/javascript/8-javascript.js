            var startTime = new Date().getTime();
            
            function generatePicture(){
                
                var shape = Math.floor(Math.random() * 2);
                
                console.log(shape);
                
                switch(shape){
                        
                    case 0:
                        generateBox();
                        break;
                    case 1:
                        generateCircle();
                        break;
                        
                };
                
            };
            
            function generateBox(){
                
                var edge = Math.random() * 200 + 100;
                
                var top = Math.random() * 400;
                
                var left = Math.random() * 800;
                
                var backGroundColor = randomColor();
                
                document.getElementById("pictureGenerator").style.backgroundColor = backGroundColor;
                
                document.getElementById("pictureGenerator").style.borderRadius = "";
                
                document.getElementById("pictureGenerator").style.width = edge + "px";
                
                document.getElementById("pictureGenerator").style.height = edge + "px";
                
                document.getElementById("pictureGenerator").style.top = top + "px";
                
                document.getElementById("pictureGenerator").style.left = left + "px";
                
                document.getElementById("pictureGenerator").style.display = "block";
                
                startTime = new Date().getTime();
                
            };
            
            function generateCircle(){
                
                var edge = Math.random() * 200 + 100;
                
                var top = Math.random() * 400;
                
                var left = Math.random() * 800;
                
                var backGroundColor = randomColor();
                
                document.getElementById("pictureGenerator").style.backgroundColor = backGroundColor;
                
                document.getElementById("pictureGenerator").style.borderRadius = "50%";
                
                document.getElementById("pictureGenerator").style.width = edge + "px";
                
                document.getElementById("pictureGenerator").style.width = edge + "px";
                
                document.getElementById("pictureGenerator").style.height = edge + "px";
                
                document.getElementById("pictureGenerator").style.top = top + "px";
                
                document.getElementById("pictureGenerator").style.left = left + "px";
                
                document.getElementById("pictureGenerator").style.display = "block";
                
                startTime = new Date().getTime();
                
            };
            
            function appearAfterDelay(){
                
                setTimeout(generatePicture, Math.floor(Math.random() * 2000));
                
            };
            
            document.getElementById("pictureGenerator").onclick = function(){
                
                var endTime = new Date().getTime();
                
                document.getElementById("pictureGenerator").style.display = "none";
                
                timeTaken = (endTime - startTime) / 1000;
                
                document.getElementById("timeTaken").innerHTML = timeTaken + "s";
                
                appearAfterDelay();
                
            };
            
            function randomColor(){
                
                var x = Math.floor(Math.random() * 256);
                
                var y = Math.floor(Math.random() * 256);
                
                var z = Math.floor(Math.random() * 256);
                
                var bgColor = "rgb(" + x + "," + y + "," + z + ")";
                
                return bgColor;
                /*
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';
                for (var i=0; i<6; i++ ) {
                    color += letters[Math.floor(Math.random() * letters.length)];
                }
                */
            };
            
            appearAfterDelay();