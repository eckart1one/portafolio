// Datos de los proyectos
const projectsData = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "Plataforma completa de comercio electrónico con carrito de compras, pagos y gestión de inventario.",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
        technologies: ["Next.js", "Stripe", "PostgreSQL", "Tailwind"],
        category: "Web App",
        icon: "fas fa-globe",
        status: "Completado",
        demoUrl: "https://demo-ecommerce.com",
        githubUrl: "https://github.com/usuario/ecommerce",
        fullDescription: `
            <h3>Descripción Completa</h3>
            <p>Esta plataforma de e-commerce fue desarrollada para una empresa retail que necesitaba una solución completa para vender sus productos online. El proyecto incluye:</p>
            <ul>
                <li>Sistema de autenticación y registro de usuarios</li>
                <li>Catálogo de productos con filtros avanzados</li>
                <li>Carrito de compras persistente</li>
                <li>Integración con Stripe para pagos seguros</li>
                <li>Panel de administración para gestión de inventario</li>
                <li>Sistema de órdenes y seguimiento de envíos</li>
            </ul>
            <h4>Desafíos Técnicos</h4>
            <p>El principal desafío fue optimizar el rendimiento para manejar un catálogo de más de 10,000 productos mientras mantenía una experiencia de usuario fluida.</p>
        `,
        features: [
            "Autenticación segura",
            "Pagos con Stripe",
            "Panel de administración",
            "Responsive design",
            "SEO optimizado"
        ],
        duration: "8 semanas",
        client: "Retail Solutions Inc.",
        year: "2023"
    },
    {
        id: 2,
        title: "Dashboard Analytics",
        description: "Dashboard interactivo para visualización de datos con gráficos en tiempo real y métricas avanzadas.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
        technologies: ["React", "Chart.js", "Node.js", "MongoDB"],
        category: "Analytics",
        icon: "fas fa-chart-bar",
        status: "En desarrollo",
        demoUrl: "https://demo-analytics.com",
        githubUrl: "https://github.com/usuario/analytics",
        fullDescription: `
            <h3>Dashboard de Analytics Avanzado</h3>
            <p>Un dashboard completo para análisis de datos empresariales con visualizaciones interactivas y reportes en tiempo real.</p>
            <ul>
                <li>Gráficos interactivos con Chart.js y D3.js</li>
                <li>Filtros dinámicos por fecha, categoría y región</li>
                <li>Exportación de reportes en PDF y Excel</li>
                <li>Alertas automáticas basadas en métricas</li>
                <li>API REST para integración con otros sistemas</li>
            </ul>
        `,
        features: [
            "Visualización en tiempo real",
            "Múltiples tipos de gráficos",
            "Filtros avanzados",
            "Exportación de datos",
            "Alertas automáticas"
        ],
        duration: "12 semanas",
        client: "Data Corp",
        year: "2023"
    },
    {
        id: 3,
        title: "Mobile Banking App",
        description: "Aplicación móvil para banca digital con transferencias, pagos y gestión de cuentas.",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=250&fit=crop",
        technologies: ["React Native", "Firebase", "TypeScript"],
        category: "Mobile",
        icon: "fas fa-mobile-alt",
        status: "Prototipo",
        demoUrl: "https://demo-banking.com",
        githubUrl: "https://github.com/usuario/banking-app",
        fullDescription: `
            <h3>Aplicación de Banca Móvil</h3>
            <p>Una aplicación móvil segura para servicios bancarios digitales con todas las funcionalidades esenciales.</p>
            <ul>
                <li>Autenticación biométrica (huella y Face ID)</li>
                <li>Transferencias entre cuentas</li>
                <li>Pagos de servicios y facturas</li>
                <li>Historial de transacciones</li>
                <li>Notificaciones push en tiempo real</li>
                <li>Modo offline para consultas básicas</li>
            </ul>
        `,
        features: [
            "Autenticación biométrica",
            "Transferencias seguras",
            "Pagos de servicios",
            "Notificaciones push",
            "Modo offline"
        ],
        duration: "16 semanas",
        client: "FinTech Bank",
        year: "2023"
    },
    {
        id: 4,
        title: "AI Content Generator",
        description: "Herramienta de generación de contenido usando IA para crear textos, imágenes y videos automáticamente.",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=250&fit=crop",
        technologies: ["Python", "OpenAI", "FastAPI", "Redis"],
        category: "AI/ML",
        icon: "fas fa-robot",
        status: "Beta",
        demoUrl: "https://demo-ai-content.com",
        githubUrl: "https://github.com/usuario/ai-content",
        fullDescription: `
            <h3>Generador de Contenido con IA</h3>
            <p>Una herramienta avanzada que utiliza inteligencia artificial para generar contenido de alta calidad de forma automática.</p>
            <ul>
                <li>Generación de textos con GPT-4</li>
                <li>Creación de imágenes con DALL-E</li>
                <li>Edición automática de videos</li>
                <li>Optimización SEO automática</li>
                <li>Múltiples formatos de salida</li>
                <li>API para integración con CMS</li>
            </ul>
        `,
        features: [
            "Generación de texto IA",
            "Creación de imágenes",
            "Edición de video",
            "Optimización SEO",
            "API integrable"
        ],
        duration: "10 semanas",
        client: "Content Media Co.",
        year: "2023"
    },
    {
        id: 5,
        title: "Task Management System",
        description: "Sistema de gestión de tareas colaborativo con asignaciones, deadlines y seguimiento de progreso.",
        image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
        technologies: ["Vue.js", "Express", "MySQL", "Socket.io"],
        category: "Productivity",
        icon: "fas fa-tasks",
        status: "Completado",
        demoUrl: "https://demo-tasks.com",
        githubUrl: "https://github.com/usuario/task-management",
        fullDescription: `
            <h3>Sistema de Gestión de Tareas</h3>
            <p>Una plataforma colaborativa para equipos que necesitan organizar y hacer seguimiento de sus proyectos y tareas.</p>
            <ul>
                <li>Tableros Kanban personalizables</li>
                <li>Asignación de tareas a miembros del equipo</li>
                <li>Seguimiento de tiempo y progreso</li>
                <li>Notificaciones en tiempo real</li>
                <li>Reportes de productividad</li>
                <li>Integración con calendarios</li>
            </ul>
        `,
        features: [
            "Tableros Kanban",
            "Colaboración en tiempo real",
            "Seguimiento de tiempo",
            "Reportes detallados",
            "Integración calendario"
        ],
        duration: "6 semanas",
        client: "ProductiveTeam LLC",
        year: "2022"
    },
    {
        id: 6,
        title: "Social Media Platform",
        description: "Red social con posts, stories, mensajería en tiempo real y sistema de seguimiento de usuarios.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=250&fit=crop",
        technologies: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
        category: "Social",
        icon: "fas fa-users",
        status: "En desarrollo",
        demoUrl: "https://demo-social.com",
        githubUrl: "https://github.com/usuario/social-platform",
        fullDescription: `
            <h3>Plataforma de Red Social</h3>
            <p>Una red social moderna con todas las características que los usuarios esperan de una plataforma social contemporánea.</p>
            <ul>
                <li>Sistema de posts con multimedia</li>
                <li>Stories temporales</li>
                <li>Mensajería instantánea</li>
                <li>Sistema de seguimiento y seguidores</li>
                <li>Feed algorítmico personalizado</li>
                <li>Moderación de contenido automática</li>
            </ul>
        `,
        features: [
            "Posts multimedia",
            "Stories temporales",
            "Chat en tiempo real",
            "Feed personalizado",
            "Moderación automática"
        ],
        duration: "20 semanas",
        client: "Social Connect Inc.",
        year: "2023"
    }
];

// Funciones principales
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.classList.toggle('active');
}

function getStatusClass(status) {
    switch (status) {
        case "Completado":
            return "status-completed";
        case "En desarrollo":
            return "status-development";
        case "Beta":
            return "status-beta";
        case "Prototipo":
            return "status-prototype";
        default:
            return "status-completed";
    }
}

function createProjectCard(project) {
    return `
        <div class="project-card" onclick="goToProjectDetail(${project.id})">
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
                <div class="project-status ${getStatusClass(project.status)}">${project.status}</div>
                <div class="project-icon">
                    <i class="${project.icon}"></i>
                </div>
            </div>
            <div class="project-content">
                <div class="project-header">
                    <h4 class="project-title">${project.title}</h4>
                    <span class="project-category">${project.category}</span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
                </div>
                <div class="project-footer">
                    <button class="btn btn-outline">
                        Ver Detalles
                        <i class="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </div>
    `;
}

function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = projectsData.map(project => createProjectCard(project)).join('');
    }
}

function goToProjectDetail(projectId) {
    // Guardar el ID del proyecto en localStorage para la página de detalle
    localStorage.setItem('currentProjectId', projectId);
    window.location.href = 'project-detail.html';
}

function loadProjectDetail() {
    const projectId = localStorage.getItem('currentProjectId') || 1;
    const project = projectsData.find(p => p.id == projectId);
    
    if (!project) return;

    // Cargar header del proyecto
    const projectHeader = document.getElementById('projectHeader');
    if (projectHeader) {
        projectHeader.innerHTML = `
            <div class="project-status ${getStatusClass(project.status)}">${project.status}</div>
            <h1>${project.title}</h1>
            <p class="project-category">${project.category}</p>
            <div class="project-technologies">
                ${project.technologies.map(tech => `<span class="tech-badge">${tech}</span>`).join('')}
            </div>
        `;
    }

    // Cargar galería
    const projectGallery = document.getElementById('projectGallery');
    if (projectGallery) {
        projectGallery.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
        `;
    }

    // Cargar descripción
    const projectDescription = document.getElementById('projectDescription');
    if (projectDescription) {
        projectDescription.innerHTML = project.fullDescription;
    }

    // Cargar información del proyecto
    const projectInfo = document.getElementById('projectInfo');
    if (projectInfo) {
        projectInfo.innerHTML = `
            <h4>Información del Proyecto</h4>
            <div class="info-item">
                <strong>Cliente:</strong> ${project.client}
            </div>
            <div class="info-item">
                <strong>Año:</strong> ${project.year}
            </div>
            <div class="info-item">
                <strong>Duración:</strong> ${project.duration}
            </div>
            <div class="info-item">
                <strong>Estado:</strong> ${project.status}
            </div>
            <h5>Características Principales:</h5>
            <ul>
                ${project.features.map(feature => `<li>${feature}</li>`).join('')}
            </ul>
        `;
    }

    // Cargar proyectos relacionados
    const relatedProjects = document.getElementById('relatedProjects');
    if (relatedProjects) {
        const related = projectsData
            .filter(p => p.id !== project.id && p.category === project.category)
            .slice(0, 3);
        
        relatedProjects.innerHTML = related.map(p => createProjectCard(p)).join('');
    }

    // Actualizar título de la página
    document.title = `${project.title} - Portfolio`;
}

function openDemo() {
    const projectId = localStorage.getItem('currentProjectId') || 1;
    const project = projectsData.find(p => p.id == projectId);
    if (project && project.demoUrl) {
        window.open(project.demoUrl, '_blank');
    }
}

function openGithub() {
    const projectId = localStorage.getItem('currentProjectId') || 1;
    const project = projectsData.find(p => p.id == projectId);
    if (project && project.githubUrl) {
        window.open(project.githubUrl, '_blank');
    }
}

function handleFormSubmit() {
    const form = document.getElementById('contactForm');
    const formData = new FormData(form);
    
    // Simular envío del formulario
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.innerHTML;
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitButton.disabled = true;
    
    setTimeout(() => {
        alert('¡Mensaje enviado correctamente! Te contactaré pronto.');
        form.reset();
        submitButton.innerHTML = originalText;
        submitButton.disabled = false;
    }, 2000);
}

// Animaciones al hacer scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.project-card, .stat-item, .skill-category, .timeline-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Smooth scroll para enlaces internos
function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Inicialización cuando el DOM está listo
document.addEventListener('DOMContentLoaded', function() {
    loadProjects();
    animateOnScroll();
    setupSmoothScroll();
    
    // Cerrar menú móvil al hacer clic fuera
    document.addEventListener('click', function(e) {
        const mobileMenu = document.getElementById('mobileMenu');
        const menuBtn = document.querySelector('.mobile-menu-btn');
        
        if (mobileMenu && !mobileMenu.contains(e.target) && !menuBtn.contains(e.target)) {
            mobileMenu.classList.remove('active');
        }
    });
    
    // Animación de las barras de habilidades
    const skillBars = document.querySelectorAll('.skill-progress');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        skillObserver.observe(bar);
    });
});

// Función para filtrar proyectos (para futuras mejoras)
function filterProjects(category) {
    const filteredProjects = category === 'all' 
        ? projectsData 
        : projectsData.filter(project => project.category === category);
    
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = filteredProjects.map(project => createProjectCard(project)).join('');
    }
}

// Función para buscar proyectos (para futuras mejoras)
function searchProjects(query) {
    const filteredProjects = projectsData.filter(project => 
        project.title.toLowerCase().includes(query.toLowerCase()) ||
        project.description.toLowerCase().includes(query.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(query.toLowerCase()))
    );
    
    const projectsGrid = document.getElementById('projectsGrid');
    if (projectsGrid) {
        projectsGrid.innerHTML = filteredProjects.map(project => createProjectCard(project)).join('');
    }
}

// Función para cambiar tema (para futuras mejoras)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Cargar tema guardado
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Función para compartir proyecto en redes sociales
function shareProject(platform, projectId) {
    const project = projectsData.find(p => p.id == projectId);
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(`Mira este increíble proyecto: ${project.title}`);
    
    let shareUrl;
    switch (platform) {
        case 'twitter':
            shareUrl = `https://twitter.com/intent/tweet?text=${text}&url=${url}`;
            break;
        case 'linkedin':
            shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${url}`;
            break;
        case 'facebook':
            shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}`;
            break;
    }
    
    if (shareUrl) {
        window.open(shareUrl, '_blank', 'width=600,height=400');
    }
}