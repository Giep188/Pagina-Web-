<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galo Israel Enríquez Paillacho - Servicios Legales</title>
    <style>
        body {
            font-family: 'Georgia', serif;
            background-color: #f4f4f9;
            color: #333;
            margin: 0;
            padding: 0;
        }
        header {
            background-color: #003366;
            color: #fff;
            padding: 20px;
            text-align: center;
        }
        nav {
            margin: 10px 0;
        }
        nav a {
            color: #fff;
            text-decoration: none;
            padding: 10px 20px;
        }
        nav a:hover {
            background-color: #444;
        }
        .banner {
            background-image: url('banner.jpg');
            background-size: cover;
            color: #fff;
            text-align: center;
            padding: 100px 20px;
        }
        .banner h1 {
            font-size: 3em;
        }
        .section {
            padding: 20px;
            margin: 20px auto;
            max-width: 800px;
            background: #fff;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
        }
        .section h2 {
            border-bottom: 2px solid #003366;
            padding-bottom: 10px;
        }
        .contact-info {
            text-align: center;
        }
        .contact-info p {
            margin: 5px 0;
        }
        footer {
            background-color: #003366;
            color: #fff;
            text-align: center;
            padding: 20px;
            position: fixed;
            width: 100%;
            bottom: 0;
        }

        #chatbot {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 300px;
            height: 400px;
            background: #fff;
            box-shadow: 0 0 10px rgba(0,0,0,0.1);
            display: none;
            flex-direction: column;
            border-radius: 8px;
            overflow: hidden;
        }

        #chatbot header {
            background: #003366;
            color: #fff;
            padding: 10px;
            text-align: center;
        }

        #chatbot .chat-content {
            flex: 1;
            padding: 10px;
            overflow-y: auto;
        }

        #chatbot .chat-input {
            display: flex;
        }

        #chatbot .chat-input input {
            flex: 1;
            padding: 10px;
            border: none;
            border-top: 1px solid #ccc;
        }

        #chatbot .chat-input button {
            padding: 10px;
            background: #003366;
            color: #fff;
            border: none;
            cursor: pointer;
        }

        .chatbot-icon {
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: #003366;
            color: #fff;
            padding: 10px;
            border-radius: 50%;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    </style>
</head>
<body>
    <header>
        <h1>Galo Israel Enríquez Paillacho</h1>
        <nav>
            <a href="#about">Sobre Mí</a>
            <a href="#services">Servicios</a>
            <a href="#areas">Áreas del Derecho</a>
            <a href="#contact">Contacto</a>
        </nav>
    </header>

    <div class="banner">
        <h1>Calidad, profesionalismo y compromiso en cada caso</h1>
    </div>

    <div id="about" class="section">
        <h2>Sobre Mí</h2>
        <p><strong>Enríquez Paillacho Galo Israel</strong></p>
        <p><strong>Educación:</strong></p>
        <ul>
            <li><strong>Colegio Prof. Pedro Echeverría Terán (2013 - 2019):</strong> Segundo escolta de la bandera de Quito. Título obtenido en Electromecánica Automotriz.</li>
            <li><strong>Universidad UTE (2020 – 2024):</strong> Título obtenido como Abogado.</li>
        </ul>
        <p><strong>Experiencia Laboral:</strong></p>
        <ul>
            <li><strong>Auxiliar Jurídico del Abogado Xavier Abad (Agosto 15 - Septiembre 1, 2022):</strong> Asistentes en trámites, Redacción de documentos, Revisión de documentos.</li>
            <li><strong>Consultorio Jurídico Gratuito UTE (Enero 11 - Junio 30, 2023):</strong> Prácticas preprofesionales en Derecho, Atención y asistencia a usuarios, Redacción y revisión de documentos jurídicos, Gestión de trámites legales.</li>
        </ul>
        <p><strong>Aptitudes y Habilidades:</strong></p>
        <ul>
            <li>Excelente capacidad de comunicación, tanto verbal como escrita.</li>
            <li>Destreza para trabajar de manera colaborativa en equipos.</li>
            <li>Persistencia y constancia para alcanzar resultados sobresalientes.</li>
            <li>Conocimiento y habilidades en el manejo de redes sociales.</li>
            <li>Fundamentos en Marketing digital.</li>
            <li>Conocimiento en diversas áreas del derecho.</li>
            <li>Sobresaliente capacidad de liderazgo.</li>
            <li>Adaptabilidad a entornos cambiantes.</li>
        </ul>
        <p><strong>Perfil:</strong> Soy una persona altamente responsable, organizada, puntual y dinámica. Mi enfoque autodidacta me permite adaptarme a las necesidades y circunstancias de manera efectiva, demostrando una gran capacidad para trabajar tanto en equipo como de manera individual.</p>
        <p><strong>Objetivo:</strong> Busco obtener experiencia profesional para poner a prueba mis conocimientos y habilidades adquiridas a lo largo de mis estudios. Mi objetivo es emprender mi camino laboral, continuando mi capacitación y aprendizaje de forma constante.</p>
    </div>

    <div id="services" class="section">
        <h2>Servicios</h2>
        <ul>
            <li>Asesoramiento Legal en áreas del derecho como: familia, niñez y adolescencia, temas civiles, laborales, penales y en otras áreas del derecho.</li>
            <li>Representación en Juicios</li>
            <li>Redacción y revisión de Documentos Legales</li>
            <li>Consultoría Empresarial</li>
            <li>Y otros servicios</li>
        </ul>
    </div>

    <div id="areas" class="section">
        <h2>Áreas del Derecho</h2>
        <p><strong>Derecho de Familia:</strong> Asesoría y representación en temas relacionados con la familia, como divorcios, custodia de hijos y adopciones.</p>
        <p><strong>Derecho Civil:</strong> Solución de conflictos entre individuos, incluyendo contratos, daños y perjuicios, y propiedad.</p>
        <p><strong>Derecho Laboral:</strong> Asistencia en asuntos laborales, como despidos, reclamaciones salariales y condiciones de trabajo.</p>
        <p><strong>Derecho Penal:</strong> Defensa en casos criminales, incluyendo delitos menores y mayores.</p>
    </div>

    <div id="contact" class="section contact-info">
        <h2>Contacto</h2>
        <p><strong>Teléfono:</strong> Tel: (02) 4514950 | Cel: +593 983208826</p>
        <p><strong>Correo Electrónico:</strong> israel.enriquez1755@gmail.com</p>
    </div>

    <footer>
        <p>&copy; 2024 Galo Israel Enríquez Paillacho - Todos los derechos reservados</p>
    </footer>

    <div id="chatbot">
        <header>
            <h2>Asistente Virtual</h2>
        </header>
        <div class="chat-content"></div>
        <div class="chat-input">
            <input type="text" id="chat-input" placeholder="Escribe un mensaje...">
            <button onclick="sendMessage()">Enviar</button>
        </div>
    </div>

    <div class="chatbot-icon" onclick="toggleChatbot()">
        Chat
    </div>

    <script>
        function toggleChatbot() {
            const chatbot = document.getElementById('chatbot');
            if (chatbot.style.display === 'none' || chatbot.style.display === '') {
                chatbot.style.display = 'flex';
            } else {
                chatbot.style.display = 'none';
            }
        }

        function sendMessage() {
            const input = document.getElementById('chat-input');
            const chatContent = document.querySelector('.chat-content');
            const userMessage = input.value;

            if (userMessage.trim() !== '') {
                const userMessageElem = document.createElement('div');
                userMessageElem.textContent = userMessage;
                userMessageElem.style.textAlign = 'right';
                chatContent.appendChild(userMessageElem);

                const botMessageElem = document.createElement('div');
                botMessageElem.textContent = 'Estoy aquí para ayudarte.';
                botMessageElem.style.textAlign = 'left';
                chatContent.appendChild(botMessageElem);

                input.value = '';
                chatContent.scrollTop = chatContent.scrollHeight;
            }
        }
    </script>
</body>
</html>
