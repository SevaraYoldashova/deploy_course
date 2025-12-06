const translations = {
    en: {
        nav_home: `Home`,
        nav_basics: `Basics`,
        nav_tutorials: `Tutorials`,
        nav_advanced: `Advanced`,
        nav_docs: `Docs`,
        nav_practice: `Practice`,
        nav_quiz: `Quiz`,
        nav_about: `About`,

        hero_title: `Web App Deployment Tutorial`,
        hero_subtitle: `Learn how to deploy your web applications to the cloud with step-by-step tutorials in English and Turkmen`,
        hero_cta: `Start Learning`,

        feature_beginner_title: `Beginner`,
        feature_beginner_desc: `Start from the basics with simple, easy-to-follow tutorials`,
        feature_intermediate_title: `Intermediate`,
        feature_intermediate_desc: `Advance your skills with real-world deployment scenarios`,
        feature_advanced_title: `Advanced`,
        feature_advanced_desc: `Master deployment with Docker, CI/CD, and cloud services`,

        basics_title: `Deployment Basics`,
        basics_what_title: `What is Deployment?`,
        basics_what_content: `Deployment is the process of making your web application available on the internet so users can access it. It involves uploading your code to a server, configuring it properly, and ensuring it runs smoothly for all visitors.`,
        basics_why_title: `Why Deploy Web Apps?`,
        basics_why_content: `Deploying web applications allows you to share your work with the world, reach users globally, and provide 24/7 accessibility. It's essential for businesses, portfolios, and any project meant for public use.`,
        basics_hosting_title: `Hosting`,
        basics_hosting_content: `Hosting is a service that stores your website files on powerful computers called servers. These servers are connected to the internet and make your website accessible to anyone, anywhere, at any time.`,
        basics_servers_title: `Servers`,
        basics_servers_content: `A server is a powerful computer that stores and delivers your website content to users. When someone types your website address, the server sends all the necessary files to their browser to display your site.`,
        basics_domain_title: `Domain & DNS`,
        basics_domain_content: `A domain is your website's address (like example.com). DNS (Domain Name System) translates this human-readable address into an IP address that computers use to locate your server.`,
        basics_static_title: `Static vs Dynamic Websites`,
        basics_frontend_title: `Frontend vs Backend Deployment`,
        basics_frontend_content: `Frontend: Deploying the user interface (HTML, CSS, JavaScript) that users see and interact with. Usually simpler and faster.`,
        basics_backend_content: `Backend: Deploying server-side code, databases, and APIs. Requires more configuration and resources.`,

        table_feature: `Feature`,
        table_static: `Static`,
        table_dynamic: `Dynamic`,
        table_content: `Content`,
        table_static_content: `Fixed HTML/CSS/JS`,
        table_dynamic_content: `Server-generated`,
        table_database: `Database`,
        table_static_db: `Not required`,
        table_dynamic_db: `Usually required`,
        table_speed: `Speed`,
        table_static_speed: `Very fast`,
        table_dynamic_speed: `Depends on server`,
        table_cost: `Cost`,
        table_static_cost: `Low`,
        table_dynamic_cost: `Higher`,

        tutorials_title: `Step-by-Step Tutorials`,
        tab_frontend: `Frontend Deployment`,
        tab_backend: `Backend Deployment`,

        netlify_title: `Deploy HTML/CSS/JS on Netlify`,
        netlify_step1: `Step 1: Create Netlify Account`,
        netlify_step1_desc: `Visit netlify.com and sign up with your GitHub, GitLab, or email account.`,
        netlify_step2: `Step 2: Prepare Your Project`,
        netlify_step2_desc: `Ensure your project has an index.html file in the root directory.`,
        netlify_step3: `Step 3: Deploy`,
        netlify_step3_desc: `Drag and drop your project folder into Netlify dashboard or connect your Git repository.`,
        netlify_step4: `Step 4: Configure Settings`,
        netlify_step4_desc: `Set build command (if needed) and publish directory. For static sites, usually no build command is needed.`,
        netlify_step5: `Step 5: Get Live URL`,
        netlify_step5_desc: `Netlify will provide a free URL like yoursite.netlify.app. You can customize it or add a custom domain.`,

        vercel_title: `Deploy React on Vercel`,
        vercel_step1: `Step 1: Install Vercel CLI`,
        vercel_step1_desc: `Open terminal and install Vercel command-line tool globally.`,
        vercel_step2: `Step 2: Create React App`,
        vercel_step2_desc: `Use Vite to create a new React application.`,
        vercel_step3: `Step 3: Build Your App`,
        vercel_step3_desc: `Create a production build of your React application.`,
        vercel_step4: `Step 4: Deploy to Vercel`,
        vercel_step4_desc: `Run the vercel command and follow the prompts.`,
        vercel_step5: `Step 5: Access Live Site`,
        vercel_step5_desc: `Vercel will provide a production URL. Every push to main branch will auto-deploy.`,

        render_title: `Deploy Node.js on Render`,
        render_step1: `Step 1: Create Render Account`,
        render_step1_desc: `Sign up at render.com with GitHub or email.`,
        render_step2: `Step 2: Prepare Node.js App`,
        render_step2_desc: `Create a basic Express.js server.`,
        render_step3: `Step 3: Add package.json`,
        render_step3_desc: `Ensure your package.json has a start script.`,
        render_step4: `Step 4: Connect Repository`,
        render_step4_desc: `Push code to GitHub and connect it in Render dashboard.`,
        render_step5: `Step 5: Configure Environment`,
        render_step5_desc: `Set build command: npm install. Set start command: npm start. Add environment variables if needed.`,
        render_step6: `Step 6: Deploy`,
        render_step6_desc: `Click deploy and Render will build and host your Node.js app with a free URL.`,

        railway_title: `Deploy Python Flask on Railway`,
        railway_step1: `Step 1: Create Flask App`,
        railway_step1_desc: `Create a simple Flask application.`,
        railway_step2: `Step 2: Create requirements.txt`,
        railway_step2_desc: `List all Python dependencies.`,
        railway_step3: `Step 3: Create Procfile`,
        railway_step3_desc: `Tell Railway how to run your app.`,
        railway_step4: `Step 4: Deploy on Railway`,
        railway_step4_desc: `Sign up at railway.app, create new project, and connect your GitHub repository.`,
        railway_step5: `Step 5: Configure Settings`,
        railway_step5_desc: `Railway auto-detects Python. Add environment variables in settings if needed.`,
        railway_step6: `Step 6: Access Your App`,
        railway_step6_desc: `Railway provides a public URL. Your Flask app is now live!`,

        advanced_title: `Advanced Concepts`,
        docker_title: `Docker Basics`,
        docker_desc: `Containers package your app with all dependencies, ensuring it runs the same everywhere.`,
        cicd_title: `CI/CD Pipeline`,
        cicd_desc: `Continuous Integration/Deployment automates testing and deployment.`,
        cicd_workflow: `Workflow:`,
        cicd_steps: `Code → Test → Build → Deploy`,
        cicd_tools: `Tools:`,
        cloud_title: `Cloud Services`,
        cloud_provider: `Provider`,
        cloud_best: `Best For`,
        cloud_aws: `Enterprise apps`,
        cloud_gcp: `ML/AI projects`,
        cloud_do: `Developers`,

        docs_title: `Complete Documentation`,
        docs_toc: `Table of Contents`,
        docs_overview: `Overview`,
        docs_terminology: `Key Terminology`,
        docs_workflow: `Deployment Workflow`,
        docs_platforms: `Platform Guides`,

        docs_overview_title: `Overview`,
        docs_overview_what: `Deployment is the process of making your web application accessible on the internet. It transforms your local development code into a live, publicly accessible website or application.`,
        docs_overview_why: `Why It's Important`,
        docs_overview_reason1: `Makes your work accessible to users worldwide`,
        docs_overview_reason2: `Enables 24/7 availability`,
        docs_overview_reason3: `Provides professional hosting infrastructure`,
        docs_overview_reason4: `Allows for scaling as your user base grows`,
        docs_overview_examples: `Real-World Examples`,
        docs_overview_examples_desc: `Companies like Netflix, Facebook, and e-commerce sites deploy thousands of times daily using automated CI/CD pipelines.`,

        docs_terminology_title: `Key Terminology`,
        term_hosting: `Hosting`,
        term_hosting_def: `A service that stores your website files on servers connected to the internet, making them accessible to visitors.`,
        term_server: `Server`,
        term_server_def: `A powerful computer that stores and delivers your web content to users when they visit your site.`,
        term_build: `Build`,
        term_build_def: `The process of converting your source code into optimized files ready for production deployment.`,
        term_domain: `Domain`,
        term_domain_def: `Your website's address on the internet (e.g., example.com).`,
        term_dns: `DNS (Domain Name System)`,
        term_dns_def: `Translates human-readable domain names into IP addresses that computers use to locate servers.`,
        term_https: `HTTP/HTTPS`,
        term_https_def: `Protocols for transferring web data. HTTPS is the secure, encrypted version.`,
        term_env: `Environment Variables`,
        term_env_def: `Configuration values stored securely outside your code (API keys, database URLs, etc.).`,
        term_cicd: `CI/CD`,
        term_cicd_def: `Continuous Integration/Continuous Deployment - automated testing and deployment processes.`,
        term_static: `Static Website`,
        term_static_def: `Pre-built HTML, CSS, and JavaScript files served directly to users without server processing.`,
        term_dynamic: `Dynamic Website`,
        term_dynamic_def: `Content generated by server-side code based on user requests and database data.`,
        term_backend: `Backend`,
        term_backend_def: `Server-side application logic, databases, and APIs that power your application.`,
        term_frontend: `Frontend`,
        term_frontend_def: `The client-side user interface that users see and interact with in their browsers.`,

        docs_workflow_title: `Deployment Workflow`,
        workflow_code: `1. Code`,
        workflow_code_desc: `Write your application`,
        workflow_build: `2. Build`,
        workflow_build_desc: `Compile and optimize`,
        workflow_config: `3. Configure`,
        workflow_config_desc: `Set environment vars`,
        workflow_deploy: `4. Deploy`,
        workflow_deploy_desc: `Upload to hosting`,
        workflow_publish: `5. Publish`,
        workflow_publish_desc: `Make live to users`,
        workflow_monitor: `6. Monitor`,
        workflow_monitor_desc: `Track performance`,

        docs_platforms_title: `Platform Documentation`,
        platform_netlify: `Drag & drop deployment, automatic builds from Git, generous free tier, perfect for static sites.`,
        platform_vercel: `Optimized for React/Next.js, edge network for fast global delivery, automatic HTTPS.`,
        platform_render: `Full-stack hosting with databases, auto-deploy from Git, free SSL certificates.`,
        platform_railway: `Simple pricing, PostgreSQL support, easy environment management.`,
        platform_aws: `Enterprise-grade infrastructure, extensive services, scalable for any size project.`,
        platform_do: `Developer-friendly, droplets (virtual servers), transparent pricing, great documentation.`,

        practice_title: `Hands-On Practice`,
        task1_title: `Deploy your first HTML project on Netlify`,
        task1_hint: `Hint: Create index.html with basic content`,
        task1_resource: `Resource:`,
        task2_title: `Deploy a Node.js backend on Render`,
        task2_hint: `Hint: Use Express.js starter template`,
        task2_resource: `Resource:`,
        task3_title: `Connect a database to deployed app`,
        task3_hint: `Hint: Use environment variables for connection string`,
        task3_resource: `Resource: Learn about PostgreSQL or MongoDB`,
        task4_title: `Set up custom domain`,
        task4_hint: `Hint: Configure DNS settings`,
        task4_resource: `Resource: Domain registrar documentation`,
        task5_title: `Implement CI/CD pipeline`,
        task5_hint: `Hint: Use GitHub Actions`,
        task5_resource: `Resource:`,

        quiz_title: `Test Your Knowledge`,
        quiz_prev: `Previous`,
        quiz_next: `Next`,
        quiz_submit: `Submit Quiz`,
        quiz_restart: `Restart Quiz`,
        quiz_score_text: `Your Score:`,
        quiz_feedback_excellent: `Excellent! You're ready to deploy!`,
        quiz_feedback_good: `Good job! Review a few topics.`,
        quiz_feedback_ok: `Keep learning! Go through tutorials again.`,
        quiz_feedback_study: `Start from basics section.`,

        about_title: `About This Tutorial`,
        about_purpose_title: `Purpose`,
        about_purpose_desc: `This web application is designed to teach web deployment concepts from complete beginners to advanced developers through a practical, hands-on learning approach.`,
        about_who_title: `Who Is This For?`,
        about_who1: `Students learning web development`,
        about_who2: `Developers new to deployment`,
        about_who3: `Anyone wanting to publish websites`,
        about_who4: `Turkmen-speaking learners worldwide`,
        about_outcomes_title: `Learning Outcomes`,
        about_outcomes_desc: `After completing this tutorial, you will:`,
        about_outcome1: `Understand deployment fundamentals`,
        about_outcome2: `Deploy frontend applications confidently`,
        about_outcome3: `Deploy backend services with databases`,
        about_outcome4: `Use modern hosting platforms`,
        about_outcome5: `Implement CI/CD pipelines`,
        about_how_title: `How to Use`,
        about_how1: `Start with Deployment Basics`,
        about_how2: `Follow step-by-step tutorials`,
        about_how3: `Complete practice tasks`,
        about_how4: `Test knowledge with quiz`,
        about_how5: `Refer to documentation anytime`,
        about_lang_title: `Languages`,
        about_lang_desc: `Full bilingual support: English & Turkmen. Switch languages anytime with the top-right button. All content professionally translated.`,

    
    },
    tm: {
        nav_home: `Baş sahypa`,
        nav_basics: `Esaslar`,
        nav_tutorials: `Sapaklar`,
        nav_advanced: `Ösen`,
        nav_docs: `Resminamalar`,
        nav_practice: `Praktika`,
        nav_quiz: `Test`,
        nav_about: `Barada`,

        hero_title: `Web Programmalaryny Ýerleşdirmek Boýunça Sapak`,
        hero_subtitle: `Iňlis we türkmen dillerinde ädimme-ädim sapaklarymyz bilen web programmalaryny buluda ýerleşdirmegi öwreniň`,
        hero_cta: `Öwrenmäge Başla`,

        feature_beginner_title: `Başlangyç`,
        feature_beginner_desc: `Ýönekeý, ýeňil düşünilýän sapaklardan başlaň`,
        feature_intermediate_title: `Orta`,
        feature_intermediate_desc: `Hakyky dünýä ýerleşdirme ssenariýalary bilen başarnygyňyzy ösdüriň`,
        feature_advanced_title: `Öňdebaryjy`,
        feature_advanced_desc: `Docker, CI/CD we bulut hyzmatlary bilen ýerleşdirmegi özleşdiriň`,

        basics_title: `Ýerleşdirmegiň Esaslary`,
        basics_what_title: `Ýerleşdirmek näme?`,
        basics_what_content: `Ýerleşdirmek web programmanyňyzy internetde elýeterli etmek prosesidir. Koduňyzy serwere ýüklemegi, dogry sazlamagy we ähli gelýänler üçin näsaz işlemegini üpjün etmegi öz içine alýar.`,
        basics_why_title: `Näme üçin Web Programmalaryny Ýerleşdirmeli?`,
        basics_why_content: `Web programmalaryny ýerleşdirmek işiňizi dünýä paýlaşmaga, dünýä boýunça ulanyjylara ýetmäge we 24/7 elýeterliligini üpjün etmäge mümkinçilik berýär. Bu işewürlik, portfeliýa we köpçülige niýetlenen islendik taslama üçin möhümdir.`,
        basics_hosting_title: `Hosting`,
        basics_hosting_content: `Hosting web sahypa faýllaryňyzy serwer diýilýän güýçli kompýuterlerde saklaýan hyzmatdyr. Bu serwerler internete birikdirilen we web sahypaňyzy islendik ýerde, islendik wagtyň özünde elýeterli edýär.`,
        basics_servers_title: `Serwerler`,
        basics_servers_content: `Serwer web sahypa mazmunyny saklaýan we ulanyjylara ýetirýän güýçli kompýuterdir. Kimdir biri web sahypaňyzyň salgysy ýazanda, serwer sahypaňyzy görkezmek üçin ähli zerur faýllary brauzere iberýär.`,
        basics_domain_title: `Domen we DNS`,
        basics_domain_content: `Domen web sahypaňyzyň salgysy (mysal.com ýaly). DNS (Domen Atlary Ulgamy) bu adam tarapyndan okalýan salgysy serweriňizi tapmak üçin kompýuterleriň ulanýan IP salgysyna terjime edýär.`,
        basics_static_title: `Statik we Dinamik Web Sahypalary`,
        basics_frontend_title: `Frontend we Backend Ýerleşdirmek`,
        basics_frontend_content: `Frontend: Ulanyjylaryň görýän we özara täsir edýän ulanyjy interfeýsini (HTML, CSS, JavaScript) ýerleşdirmek. Adatça has ýönekeý we çalt.`,
        basics_backend_content: `Backend: Serwer tarapynda kod, maglumat bazalary we API-leri ýerleşdirmek. Has köp konfigurasiýa we çeşmeleri talap edýär.`,

        table_feature: `Aýratynlyk`,
        table_static: `Statik`,
        table_dynamic: `Dinamik`,
        table_content: `Mazmun`,
        table_static_content: `Kesgitlenen HTML/CSS/JS`,
        table_dynamic_content: `Serwer tarapyndan döredilen`,
        table_database: `Maglumat Bazasy`,
        table_static_db: `Gerek däl`,
        table_dynamic_db: `Adatça gerek`,
        table_speed: `Tizlik`,
        table_static_speed: `Gaty çalt`,
        table_dynamic_speed: `Serwere bagly`,
        table_cost: `Bahasy`,
        table_static_cost: `Pes`,
        table_dynamic_cost: `Has ýokary`,

        tutorials_title: `Ädimme-ädim Sapaklar`,
        tab_frontend: `Frontend Ýerleşdirmek`,
        tab_backend: `Backend Ýerleşdirmek`,

        netlify_title: `HTML/CSS/JS-ni Netlify-da Ýerleşdirmek`,
        netlify_step1: `1-nji Ädim: Netlify Hasaby Dörediň`,
        netlify_step1_desc: `netlify.com-a giriň we GitHub, GitLab ýa-da e-poçta hasabyňyz bilen agza boluň.`,
        netlify_step2: `2-nji Ädim: Taslamaňyzy Taýýarlaň`,
        netlify_step2_desc: `Taslamaňyzyň kök katalogynda index.html faýlynyň bardygyna göz ýetiriň.`,
        netlify_step3: `3-nji Ädim: Ýerleşdiriň`,
        netlify_step3_desc: `Taslama bukjaňyzy Netlify paneline süýräň we goýuň ýa-da Git ammaryňyzy birikdiriň.`,
        netlify_step4: `4-nji Ädim: Sazlamalary Düzüň`,
        netlify_step4_desc: `Gurluş buýrugyny (gerek bolsa) we neşir katalogyny belläň. Statik sahypalar üçin adatça gurluş buýrugy gerek däl.`,
        netlify_step5: `5-nji Ädim: Janly URL Alyň`,
        netlify_step5_desc: `Netlify mugt URL berer, mysal üçin yoursite.netlify.app. Ony özleşdirip ýa-da özboluşly domen goşup bilersiňiz.`,

        vercel_title: `React-ny Vercel-de Ýerleşdirmek`,
        vercel_step1: `1-nji Ädim: Vercel CLI-ni Guruň`,
        vercel_step1_desc: `Terminaly açyň we Vercel buýruk setiri guralyny global görnüşde guruň.`,
        vercel_step2: `2-nji Ädim: React Programmasy Dörediň`,
        vercel_step2_desc: `Täze React programmasy döretmek üçin Vite ulanyň.`,
        vercel_step3: `3-nji Ädim: Programmanyňyzy Guruň`,
        vercel_step3_desc: `React programmanyňyzyň önümçilik gurlujysyny dörediň.`,
        vercel_step4: `4-nji Ädim: Vercel-e Ýerleşdiriň`,
        vercel_step4_desc: `vercel buýrugyny işlediň we görkezmeleri ýerine ýetiriň.`,
        vercel_step5: `5-nji Ädim: Janly Sahypa Giriň`,
        vercel_step5_desc: `Vercel önümçilik URL-ini berer. Esasy şahanyň her bir itermesi awtomatiki ýerleşdiriler.`,

        render_title: `Node.js-ni Render-de Ýerleşdirmek`,
        render_step1: `1-nji Ädim: Render Hasaby Dörediň`,
        render_step1_desc: `render.com-da GitHub ýa-da e-poçta bilen agza boluň.`,
        render_step2: `2-nji Ädim: Node.js Programmasyny Taýýarlaň`,
        render_step2_desc: `Esasy Express.js serwerini dörediň.`,
        render_step3: `3-nji Ädim: package.json Goşuň`,
        render_step3_desc: `package.json faýlyňyzda başlangyç skriptiniň bardygyna göz ýetiriň.`,
        render_step4: `4-nji Ädim: Ammary Birikdiriň`,
        render_step4_desc: `Kody GitHub-a iteriň we Render panelinde birikdiriň.`,
        render_step5: `5-nji Ädim: Daşky Gurşawy Düzüň`,
        render_step5_desc: `Gurluş buýrugyny belläň: npm install. Başlangyç buýrugyny belläň: npm start. Gerek bolsa daşky gurşaw üýtgeýjilerini goşuň.`,
        render_step6: `6-njy Ädim: Ýerleşdiriň`,
        render_step6_desc: `Ýerleşdir düwmesine basyň we Render mugt URL bilen Node.js programmanyňyzy gurar we ýerleşdirer.`,

        railway_title: `Python Flask-ny Railway-de Ýerleşdirmek`,
        railway_step1: `1-nji Ädim: Flask Programmasy Dörediň`,
        railway_step1_desc: `Ýönekeý Flask programmasy dörediň.`,
        railway_step2: `2-nji Ädim: requirements.txt Dörediň`,
        railway_step2_desc: `Ähli Python garaşlylyklaryny sanaň.`,
        railway_step3: `3-nji Ädim: Procfile Dörediň`,
        railway_step3_desc: `Railway-ä programmanyňyzy nädip işletmelidigini aýdyň.`,
        railway_step4: `4-nji Ädim: Railway-de Ýerleşdiriň`,
        railway_step4_desc: `railway.app-da agza boluň, täze taslama dörediň we GitHub ammaryňyzy birikdiriň.`,
        railway_step5: `5-nji Ädim: Sazlamalary Düzüň`,
        railway_step5_desc: `Railway Python-y awtomatiki kesgitleýär. Gerek bolsa sazlamalarda daşky gurşaw üýtgeýjilerini goşuň.`,
        railway_step6: `6-njy Ädim: Programmanyňyza Giriň`,
        railway_step6_desc: `Railway köpçülige açyk URL berýär. Flask programmanyňyz indi janly!`,

        advanced_title: `Öňdebaryjy Düşünjeler`,
        docker_title: `Docker Esaslary`,
        docker_desc: `Konteynerler programmanyňyzy ähli garaşlylyklar bilen gaplamak, her ýerde deň işlemegini üpjün edýär.`,
        cicd_title: `CI/CD Turbageçiriji`,
        cicd_desc: `Yzygiderli Integrasiýa/Ýerleşdirme synag we ýerleşdirme proseslerini awtomatlaşdyrýar.`,
        cicd_workflow: `Iş prosesi:`,
        cicd_steps: `Kod → Synag → Gurmak → Ýerleşdirmek`,
        cicd_tools: `Gurallar:`,
        cloud_title: `Bulut Hyzmatlary`,
        cloud_provider: `Üpjün ediji`,
        cloud_best: `Iň gowusy`,
        cloud_aws: `Kärhanalar üçin`,
        cloud_gcp: `ML/AI taslamalary`,
        cloud_do: `Döredijiler`,

        docs_title: `Doly Resminamalar`,
        docs_toc: `Mazmuny`,
        docs_overview: `Syn`,
        docs_terminology: `Esasy Terminologiýa`,
        docs_workflow: `Ýerleşdirme Iş Prosesi`,
        docs_platforms: `Platforma Gollanmalary`,

        docs_overview_title: `Syn`,
        docs_overview_what: `Ýerleşdirmek web programmanyňyzy internetde elýeterli etmek prosesidir. Ol ýerli ösüş kodyňyzy janly, köpçülige açyk web sahypasyna ýa-da programma öwürýär.`,
        docs_overview_why: `Näme üçin Möhüm`,
        docs_overview_reason1: `Işiňizi dünýä boýunça ulanyjylara elýeterli edýär`,
        docs_overview_reason2: `24/7 elýeterliligini üpjün edýär`,
        docs_overview_reason3: `Hünär hosting infrastrukturasyny berýär`,
        docs_overview_reason4: `Ulanyjy bazaňyz ösýän ýaly ulaltmaga mümkinçilik berýär`,
        docs_overview_examples: `Hakyky Dünýä Mysallary`,
        docs_overview_examples_desc: `Netflix, Facebook we e-söwda sahypalary ýaly kompaniýalar awtomatlaşdyrylan CI/CD turbageleri arkaly günde müňlerçe gezek ýerleşdirýärler.`,

        docs_terminology_title: `Esasy Terminologiýa`,
        term_hosting: `Hosting`,
        term_hosting_def: `Web sahypa faýllaryňyzy internete birikdirilen serwerlerde saklaýan, gelýänler üçin elýeterli edýän hyzmat.`,
        term_server: `Serwer`,
        term_server_def: `Web mazmunyny saklaýan we ulanyjylar web sahypaňyza girenlerinde berýän güýçli kompýuter.`,
        term_build: `Gurmak`,
        term_build_def: `Çeşme kodyňyzy önümçilik ýerleşdirmek üçin taýýar optimallaşdyrylan faýllara öwürmek prosesi.`,
        term_domain: `Domen`,
        term_domain_def: `Web sahypaňyzyň internetdäki salgysy (mysal.com ýaly).`,
        term_dns: `DNS (Domen Atlary Ulgamy)`,
        term_dns_def: `Adam tarapyndan okalýan domen atlaryny serweriňizi tapmak üçin kompýuterleriň ulanýan IP salgysyna terjime edýär.`,
        term_https: `HTTP/HTTPS`,
        term_https_def: `Web maglumatlaryny geçirmek üçin protokollar. HTTPS howpsuz, şifrlenen görnüşidir.`,
        term_env: `Daşky Gurşaw Üýtgeýjileri`,
        term_env_def: `Kodyňyzdan daşarda howpsuz saklanýan konfigurasiýa bahalary (API açarlary, maglumat bazasy URL-leri we ş.m.).`,
        term_cicd: `CI/CD`,
        term_cicd_def: `Yzygiderli Integrasiýa/Yzygiderli Ýerleşdirme - awtomatlaşdyrylan synag we ýerleşdirme prosesleri.`,
        term_static: `Statik Web Sahypa`,
        term_static_def: `Serwer işlemezden gönüden-göni ulanyjylara berlen öňünden gurlan HTML, CSS we JavaScript faýllary.`,
        term_dynamic: `Dinamik Web Sahypa`,
        term_dynamic_def: `Ulanyjy haýyşlaryna we maglumat bazasy maglumatlaryna esaslanýan serwer tarapynda kod tarapyndan döredilen mazmun.`,
        term_backend: `Backend`,
        term_backend_def: `Programmanyňyzy işletýän serwer tarapyndaky programma logikasy, maglumat bazalary we API-ler.`,
        term_frontend: `Frontend`,
        term_frontend_def: `Ulanyjylaryň brauzerde görýän we özara täsir edýän müşderi tarapyndaky ulanyjy interfeýsi.`,

        docs_workflow_title: `Ýerleşdirme Iş Prosesi`,
        workflow_code: `1. Kod`,
        workflow_code_desc: `Programmanyňyzy ýazyň`,
        workflow_build: `2. Gurmak`,
        workflow_build_desc: `Düzmek we optimallaşdyrmak`,
        workflow_config: `3. Düzmek`,
        workflow_config_desc: `Daşky gurşaw üýtgeýjilerini belläň`,
        workflow_deploy: `4. Ýerleşdirmek`,
        workflow_deploy_desc: `Hostinge ýüklemek`,
        workflow_publish: `5. Neşir etmek`,
        workflow_publish_desc: `Ulanyjylar üçin janly etmek`,
        workflow_monitor: `6. Gözegçilik`,
        workflow_monitor_desc: `Öndürijiligi yzarlamak`,

        docs_platforms_title: `Platforma Resminamalary`,
        platform_netlify: `Süýre we goý ýerleşdirmesi, Git-den awtomatiki gurmalar, ýörite mugt derejesi, statik sahypalar üçin ajaýyp.`,
        platform_vercel: `React/Next.js üçin optimallaşdyrylan, çalt global eltmek üçin gyrasy ulgamy, awtomatiki HTTPS.`,
        platform_render: `Maglumat bazalary bilen doly stek hosting, Git-den awto-ýerleşdirme, mugt SSL şahadatnamalary.`,
        platform_railway: `Ýönekeý bahalar, PostgreSQL goldawy, aňsat daşky gurşaw dolandyryşy.`,
        platform_aws: `Kärhanalar derejesindäki infrastruktura, giň hyzmatlar, islendik ululykdaky taslama üçin ulaldyp bolar.`,
        platform_do: `Döredijiler üçin amatly, damjalar (wirtual serwerler), aç-açan bahalar, ajaýyp resminamalar.`,

        practice_title: `Elde Praktika`,
        task1_title: `Netlify-da ilkinji HTML taslamaňyzy ýerleşdiriň`,
        task1_hint: `Maslahat: Esasy mazmun bilen index.html dörediň`,
        task1_resource: `Çeşme:`,
        task2_title: `Render-de Node.js backend-ini ýerleşdiriň`,
        task2_hint: `Maslahat: Express.js başlangyç şablonyny ulanyň`,
        task2_resource: `Çeşme:`,
        task3_title: `Ýerleşdirilen programma maglumat bazasyny birikdiriň`,
        task3_hint: `Maslahat: Baglanyşyk setiri üçin daşky gurşaw üýtgeýjilerini ulanyň`,
        task3_resource: `Çeşme: PostgreSQL ýa-da MongoDB barada öwreniň`,
        task4_title: `Özboluşly domen düzüň`,
        task4_hint: `Maslahat: DNS sazlamalaryny düzüň`,
        task4_resource: `Çeşme: Domen bellige alyjy resminamalary`,
        task5_title: `CI/CD turbageçirijisini durmuşa geçiriň`,
        task5_hint: `Maslahat: GitHub Actions ulanyň`,
        task5_resource: `Çeşme:`,

        quiz_title: `Bilimiňizi Barlaň`,
        quiz_prev: `Öňki`,
        quiz_next: `Indiki`,
        quiz_submit: `Testi Tabşyryň`,
        quiz_restart: `Testi Täzeden Başla`,
        quiz_score_text: `Siziň Balyňyz:`,
        quiz_feedback_excellent: `Ajaýyp! Ýerleşdirmäge taýýarsyňyz!`,
        quiz_feedback_good: `Gowy iş! Birnäçe temany gözden geçiriň.`,
        quiz_feedback_ok: `Öwrenişiňizi dowam etdiriň! Sapaklary ýene bir gezek geçiň.`,
        quiz_feedback_study: `Esaslar bölüminden başlaň.`,

        about_title: `Bu Sapak Barada`,
        about_purpose_title: `Maksat`,
        about_purpose_desc: `Bu web programmasy web ýerleşdirme düşünjelerini doly başlangyçlardan ösen döredijilere çenli praktiki, elde öwreniş çemeleşmesi arkaly öwretmek üçin döredildi.`,
        about_who_title: `Bu Kim Üçin?`,
        about_who1: `Web ösüşini öwrenýän talyplar`,
        about_who2: `Ýerleşdirmede täze döredijiler`,
        about_who3: `Web sahypalaryny neşir etmek isleýän islendik adam`,
        about_who4: `Dünýä boýunça türkmen dilinde gürleýän öwrenijiler`,
        about_outcomes_title: `Öwreniş Netijeleri`,
        about_outcomes_desc: `Bu sapagyň ahyrynda siz:`,
        about_outcome1: `Ýerleşdirmegiň esaslaryna düşünersiňiz`,
        about_outcome2: `Frontend programmalaryny ynam bilen ýerleşdirersiňiz`,
        about_outcome3: `Maglumat bazalary bilen backend hyzmatlaryny ýerleşdirersiňiz`,
        about_outcome4: `Häzirki zaman hosting platformalaryny ulanyp bilersiňiz`,
        about_outcome5: `CI/CD turbageleri durmuşa geçirersiňiz`,
        about_how_title: `Nädip Ulanmaly`,
        about_how1: `Ýerleşdirmegiň Esaslary bilen başlaň`,
        about_how2: `Ädimme-ädim sapaklary ýerine ýetiriň`,
        about_how3: `Praktika meselelerini tamamlaň`,
        about_how4: `Test bilen bilimiňizi barlaň`,
        about_how5: `Islendik wagt resminamalara ýüz tutuň`,
        about_lang_title: `Diller`,
        about_lang_desc: `Doly iki dilli goldaw: Iňlis we Türkmen. Ýokarky sag düwme bilen islendik wagt dilleri çalşyň. Ähli mazmun hünärmen tarapyndan terjime edildi.`,

   
    }
};

// Quiz Questions
const quizQuestions = {
    en: [
        {
            question: `What does deployment mean?`,
            options: [
                `Writing code`,
                `Making your app available online`,
                `Testing locally`,
                `Designing UI`
            ],
            correct: 1
        },
        {
            question: `Which is a static hosting platform?`,
            options: [
                `Netlify`,
                `MySQL`,
                `MongoDB`,
                `Express.js`
            ],
            correct: 0
        },
        {
            question: `What is DNS?`,
            options: [
                `Domain Name System`,
                `Data Network Service`,
                `Digital Node Server`,
                `Deploy New Site`
            ],
            correct: 0
        },
        {
            question: `What is an environment variable?`,
            options: [
                `Weather data`,
                `Configuration value stored securely`,
                `JavaScript variable`,
                `CSS property`
            ],
            correct: 1
        },
        {
            question: `What does CI/CD stand for?`,
            options: [
                `Code Integration/Code Deployment`,
                `Continuous Integration/Continuous Deployment`,
                `Computer Interface/Computer Design`,
                `Create Install/Create Deploy`
            ],
            correct: 1
        },
        {
            question: `Which protocol is secure?`,
            options: [
                `HTTP`,
                `HTTPS`,
                `FTP`,
                `SMTP`
            ],
            correct: 1
        },
        {
            question: `What is a Docker container?`,
            options: [
                `Storage box`,
                `Isolated environment for running applications`,
                `Database`,
                `Web server`
            ],
            correct: 1
        },
        {
            question: `What is Vercel optimized for?`,
            options: [
                `Python apps`,
                `React/Next.js apps`,
                `PHP apps`,
                `Ruby apps`
            ],
            correct: 1
        },
        {
            question: `What is a server?`,
            options: [
                `Computer that serves web content`,
                `Database`,
                `Programming language`,
                `Design tool`
            ],
            correct: 0
        },
        {
            question: `What is the purpose of a build process?`,
            options: [
                `Design UI`,
                `Prepare code for production`,
                `Write tests`,
                `Create database`
            ],
            correct: 1
        },
        {
            question: `What is a static website?`,
            options: [
                `Website that doesn't move`,
                `Pre-built HTML/CSS/JS files`,
                `Dynamic content`,
                `Backend application`
            ],
            correct: 1
        },
        {
            question: `What is the frontend?`,
            options: [
                `Server-side logic`,
                `Database`,
                `Client-side user interface`,
                `API endpoints`
            ],
            correct: 2
        }
    ],
    tm: [
        {
            question: `Ýerleşdirmek näme aňladýar?`,
            options: [
                `Kod ýazmak`,
                `Programmanyňyzy onlaýn elýeterli etmek`,
                `Ýerli synag`,
                `UI dizaýn etmek`
            ],
            correct: 1
        },
        {
            question: `Haýsy statik hosting platformasydyr?`,
            options: [
                `Netlify`,
                `MySQL`,
                `MongoDB`,
                `Express.js`
            ],
            correct: 0
        },
        {
            question: `DNS näme?`,
            options: [
                `Domen Atlary Ulgamy`,
                `Maglumat Ulgam Hyzmaty`,
                `Sanly Düwün Serweri`,
                `Täze Sahypany Ýerleşdirmek`
            ],
            correct: 0
        },
        {
            question: `Daşky gurşaw üýtgeýjisi näme?`,
            options: [
                `Howa maglumaty`,
                `Howpsuz saklanýan konfigurasiýa bahasy`,
                `JavaScript üýtgeýjisi`,
                `CSS häsiýeti`
            ],
            correct: 1
        },
        {
            question: `CI/CD näme aňladýar?`,
            options: [
                `Kod Integrasiýasy/Kod Ýerleşdirmesi`,
                `Yzygiderli Integrasiýa/Yzygiderli Ýerleşdirme`,
                `Kompýuter Interfeýsi/Kompýuter Dizaýny`,
                `Döretmek Gurmak/Döretmek Ýerleşdirmek`
            ],
            correct: 1
        },
        {
            question: `Haýsy protokol howpsuz?`,
            options: [
                `HTTP`,
                `HTTPS`,
                `FTP`,
                `SMTP`
            ],
            correct: 1
        },
        {
            question: `Docker konteýneri näme?`,
            options: [
                `Saklaýyş gutusy`,
                `Programmalary işletmek üçin izolirlenilen gurşaw`,
                `Maglumat bazasy`,
                `Web serwer`
            ],
            correct: 1
        },
        {
            question: `Vercel näme üçin optimallaşdyrylan?`,
            options: [
                `Python programmalary`,
                `React/Next.js programmalary`,
                `PHP programmalary`,
                `Ruby programmalary`
            ],
            correct: 1
        },
        {
            question: `Serwer näme?`,
            options: [
                `Web mazmunyny berýän kompýuter`,
                `Maglumat bazasy`,
                `Programmirleme dili`,
                `Dizaýn guraly`
            ],
            correct: 0
        },
        {
            question: `Gurluş prosesiniň maksady näme?`,
            options: [
                `UI dizaýn etmek`,
                `Kody önümçilik üçin taýýarlamak`,
                `Synag ýazmak`,
                `Maglumat bazasy döretmek`
            ],
            correct: 1
        },
        {
            question: `Statik web sahypa näme?`,
            options: [
                `Hereket etmeýän web sahypa`,
                `Öňünden gurlan HTML/CSS/JS faýllary`,
                `Dinamik mazmun`,
                `Backend programmasy`
            ],
            correct: 1
        },
        {
            question: `Frontend näme?`,
            options: [
                `Serwer tarapyndaky logika`,
                `Maglumat bazasy`,
                `Müşderi tarapyndaky ulanyjy interfeýsi`,
                `API nokatlary`
            ],
            correct: 2
        }
    ]
};

// Global State
let currentLang = `en`;
let currentQuizIndex = 0;
let userAnswers = [];
let quizSubmitted = false;

// Initialize
document.addEventListener(`DOMContentLoaded`, () => {
    updateLanguage();
    loadTaskProgress();
    initQuiz();
    setupScrollEffects();
    setupNavigation();
});

// Language Toggle
function toggleLanguage() {
    currentLang = currentLang === `en` ? `tm` : `en`;
    document.getElementById(`langText`).textContent = currentLang === `en` ? `TM` : `EN`;
    updateLanguage();
    initQuiz();
}

function updateLanguage() {
    const elements = document.querySelectorAll(`[data-translate]`);
    elements.forEach(el => {
        const key = el.getAttribute(`data-translate`);
        if (translations[currentLang][key]) {
            el.textContent = translations[currentLang][key];
        }
    });
}

// Accordion
function toggleAccordion(header) {
    const content = header.nextElementSibling;
    const icon = header.querySelector(`.accordion-icon`);

    content.classList.toggle(`active`);
    icon.classList.toggle(`active`);
}

// Tabs
let currentTab = 0;
function switchTab(index) {
    const tabs = document.querySelectorAll(`.tab-btn`);
    const contents = document.querySelectorAll(`.tab-content`);

    tabs.forEach((tab, i) => {
        if (i === index) {
            tab.classList.add(`active`);
        } else {
            tab.classList.remove(`active`);
        }
    });

    contents.forEach((content, i) => {
        if (i === index) {
            content.classList.add(`active`);
        } else {
            content.classList.remove(`active`);
        }
    });

    currentTab = index;
}

// Code Copy
function copyCode(btn) {
    const codeBlock = btn.nextElementSibling;
    const code = codeBlock.textContent;

    navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.textContent;
        btn.textContent = currentLang === `en` ? `Copied!` : `Göçürildi!`;
        setTimeout(() => {
            btn.textContent = originalText;
        }, 2000);
    });
}

// Task Progress
function saveTaskProgress() {
    const checkboxes = document.querySelectorAll(`.task-checkbox`);
    const progress = Array.from(checkboxes).map(cb => cb.checked);
    localStorage.setItem(`taskProgress`, JSON.stringify(progress));
}

function loadTaskProgress() {
    const saved = localStorage.getItem(`taskProgress`);
    if (saved) {
        const progress = JSON.parse(saved);
        const checkboxes = document.querySelectorAll(`.task-checkbox`);
        checkboxes.forEach((cb, i) => {
            if (progress[i]) cb.checked = true;
        });
    }
}

// Quiz Functions
function initQuiz() {
    currentQuizIndex = 0;
    userAnswers = [];
    quizSubmitted = false;
    showQuestion();
}

function showQuestion() {
    const questions = quizQuestions[currentLang];
    const question = questions[currentQuizIndex];
    const quizContent = document.getElementById(`quizContent`);

    if (quizSubmitted) {
        showResults();
        return;
    }

    quizContent.innerHTML = `
                <div class="quiz-question">
                    <h3>${currentLang === `en` ? `Question` : `Sorag`} ${currentQuizIndex + 1}/${questions.length}</h3>
                    <p style="font-size: 1.1rem; margin-bottom: 1.5rem;">${question.question}</p>
                    <ul class="quiz-options">
                        ${question.options.map((opt, i) => `
                            <li class="quiz-option ${userAnswers[currentQuizIndex] === i ? `selected` : ``}" 
                                onclick="selectAnswer(${i})">
                                ${String.fromCharCode(65 + i)}. ${opt}
                            </li>
                        `).join(``)}
                    </ul>
                </div>
            `;

    updateQuizButtons();
}

function selectAnswer(index) {
    if (quizSubmitted) return;
    userAnswers[currentQuizIndex] = index;
    showQuestion();
}

function nextQuestion() {
    const questions = quizQuestions[currentLang];
    if (currentQuizIndex < questions.length - 1) {
        currentQuizIndex++;
        showQuestion();
    }
}

function previousQuestion() {
    if (currentQuizIndex > 0) {
        currentQuizIndex--;
        showQuestion();
    }
}

function submitQuiz() {
    quizSubmitted = true;
    showResults();
}

function showResults() {
    const questions = quizQuestions[currentLang];
    let score = 0;

    userAnswers.forEach((answer, i) => {
        if (answer === questions[i].correct) score++;
    });

    const percentage = (score / questions.length) * 100;
    let feedback = ``;

    if (score >= 10) {
        feedback = translations[currentLang].quiz_feedback_excellent;
    } else if (score >= 7) {
        feedback = translations[currentLang].quiz_feedback_good;
    } else if (score >= 4) {
        feedback = translations[currentLang].quiz_feedback_ok;
    } else {
        feedback = translations[currentLang].quiz_feedback_study;
    }

    const quizContent = document.getElementById(`quizContent`);
    quizContent.innerHTML = `
                <div class="quiz-result">
                    <h3>${translations[currentLang].quiz_score_text}</h3>
                    <div class="quiz-score">${score}/${questions.length}</div>
                    <p style="font-size: 1.2rem; margin-bottom: 2rem;">${feedback}</p>
                    <button class="quiz-btn" onclick="initQuiz()">${translations[currentLang].quiz_restart}</button>
                </div>
            `;

    document.getElementById(`prevBtn`).style.display = `none`;
    document.getElementById(`nextBtn`).style.display = `none`;
    document.getElementById(`submitBtn`).style.display = `none`;
}

function updateQuizButtons() {
    const questions = quizQuestions[currentLang];
    const prevBtn = document.getElementById(`prevBtn`);
    const nextBtn = document.getElementById(`nextBtn`);
    const submitBtn = document.getElementById(`submitBtn`);

    prevBtn.style.display = currentQuizIndex > 0 ? `block` : `none`;

    if (currentQuizIndex === questions.length - 1) {
        nextBtn.style.display = `none`;
        submitBtn.style.display = `block`;
        submitBtn.disabled = userAnswers[currentQuizIndex] === undefined;
    } else {
        nextBtn.style.display = `block`;
        submitBtn.style.display = `none`;
        nextBtn.disabled = userAnswers[currentQuizIndex] === undefined;
    }
}

// Mobile Menu
function toggleMobileMenu() {
    const nav = document.getElementById(`mainNav`);
    nav.classList.toggle(`active`);
}

// Scroll Effects
function setupScrollEffects() {
    const scrollTopBtn = document.getElementById(`scrollTopBtn`);

    window.addEventListener(`scroll`, () => {
        if (window.scrollY > 300) {
            scrollTopBtn.classList.add(`visible`);
        } else {
            scrollTopBtn.classList.remove(`visible`);
        }
    });
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: `smooth` });
}

// Navigation
function setupNavigation() {
    const navLinks = document.querySelectorAll(`.nav-link`);

    navLinks.forEach(link => {
        link.addEventListener(`click`, (e) => {
            e.preventDefault();
            const target = link.getAttribute(`href`);
            const element = document.querySelector(target);

            if (element) {
                const offset = 80;
                const elementPosition = element.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - offset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: `smooth`
                });
            }

            navLinks.forEach(l => l.classList.remove(`active`));
            link.classList.add(`active`);

            const nav = document.getElementById(`mainNav`);
            nav.classList.remove(`active`);
        });
    });

    window.addEventListener(`scroll`, () => {
        let current = ``;
        const sections = document.querySelectorAll(`section`);

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute(`id`);
            }
        });

        navLinks.forEach(link => {
            link.classList.remove(`active`);
            if (link.getAttribute(`href`) === `#` + current) {
                link.classList.add(`active`);
            }
        });
    });
}
