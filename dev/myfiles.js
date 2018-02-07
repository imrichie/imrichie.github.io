function compare(a, b) {
    if (a.name < b.name)
        return -1;
    if (a.name > b.name)
        return 1;
    return 0;
}

function changeImage(img) {
    var image = document.createElement("img");
    image.src = img;
    image.width = 1000;
    var content = document.getElementById("content");
    while(content.firstChild) {
      content.removeChild(content.firstChild);
    }
    content.appendChild(image);
}

var summary_txt =
    {
        // name: "summary.txt",
        // type: "txt",
        // text: "My name is Richie Flores, I'm a [[b;red;black]Computer Science] major at [[b;red;black]University of Southern California]\n\n" +
        //       "I'm experienced in [[b;aqua;black]C++/Linux] development from my internships writing clean and scalable code producing high performant applications. My expertise lies in distributed systems, especially in in-memory storage systems or databases.\n In terms of software, I am interested in developing and scaling infrastructure." +
        //       "My specialties and interest include:\n"+
        //       "[[b;deeppink;black]Distributed Systems, Unix Network Programming, Concurrency, Data Structure] (C++ STL)" +
        //       "\n\n"+
        //       "When not at work, I enjoy [[b;aqua;black]Web/iOS Development] creating unique user experiences like the one you are seeing now. I love tapping into my creativity and create unorthodox design. I pride myself in finding unique ways of representing information and media." +
        //       "\n\n"
    };

var contact_txt =
    {
        name: "contact.txt",
        type: "txt",
        text: "E-mail: rfloresc[ at ]usc.edu\n\n" +
              "LinkedIn: https://www.linkedin.com/in/florescuevas\n\n" +
              "Facebook: https://www.facebook.com/richiexflores\n\n" +
              "GitHub: https://github.com/imrichie\n"
    };

var resume_pdf =
    {
        name: "Floresricardoresume.pdf",
        type: "pdf",
        link: "Floresricardoresume.pdf"
    };

var resume_txt =
    {
        name: "resume.txt",
        type: "txt",
        text: "\
\n********************************************************************************\
\n                                  Richie Flores\
\nrfloresc@usc.edu                                            661.350.7774\
\n\
\nComputer Science Major\
\n********************************************************************************\
\n\
\n   Technical Skills: C/C++, Python, Unix/Linux, Javascript, Excel VBA, Swift\
\n   Web & Design    : HTML/CSS, PHP/MySQL, Node, jQuery\
\n\
\n\
\n***************\
\nWork Experience\
\n***************\
\n   ___________________________________________________________________________\
\n   USC Viterbi School of Engineering\
\n   Instructional Assistant - Data science\
\n     -Aid discussions on data science and building software development skills including:\
\n      Python scripting, using scientific packages, web scraping techniques and data visualization.\
\n\
\n     -Assist students with course projects and concepts in weekly office hours\
\n   ___________________________________________________________________________\
\n   Northrop Grumman\
\n   Software Engineer - Intern\
\n      -Verify and validate various engineering releases, ensuring the quality\
\n       of software products to the customer.\
\n\
\n      - Develop automation tools to improve the efficiency of testing \
\n   ___________________________________________________________________________\
\n   United States Navy\
\n   Navigation Specialist\
\n      - Performed system upgrades, troubleshot component failures, and installed\
\n        approved system modifications to navigation systems.\
\n\
\n*********\
\nEducation\
\n*********\
\n\
\n   University of Southern California\
\n      - Norman Topping Scholar, ACM\
"
    };

var welcome_txt =
    {
        name: "welcome.txt",
        type: "txt",
        text: "[[b;aqua;black]Welcome to my Website. My name is Richie Flores]\nEnjoy your stay.\n\nPress ` to minimize the terminal. Available commands are:\n" +
              "[[b;red;black]cd], [[b;red;black]ls], [[b;red;black]cat], [[b;red;black]open] (opens file like pdf and jpg)\n"
    };



var traffic_classifier =
    {
        name: "traffic_classifier.git",
        type: "pdf",
        link: "https://github.com/imrichie/Traffic_Light_Classifer/blob/master/Traffic_Light_Classifier.ipynb"
    };
var pitch_perfect =
    {
        name: "pitch_perfect.git",
        type: "pdf",
        link: "https://github.com/imrichie/pitch-perfect"
    };

var coding =
    {
        name: "Coding",
        type: "folder",
        kids: [traffic_classifier, pitch_perfect],
        back: projects,
        setg: { prompt: '[[b;lawngreen;black]richie.flores:/Projects/Coding~] ',
                name:   'richie.flores',
                completion: function(term, string, callback) {
                    callback([
                            'pitch_perfect.git',
                            'traffic_classifier.git'
                              ]);},
              }
    };



var aboutme =
    {
        name: "AboutMe",
        type: "folder",
        kids: [resume_pdf, contact_txt, resume_txt,summary_txt],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]richie.flores:/AboutMe~] ',
                name:   'richie.flores',
                completion: function(term, string, callback) {
                    callback([
                              'summary.txt',
                              'resume.txt',
                              'contact.txt',
                              'Floresricardoresume.pdf'
                              ]);},
              }
    };

var projects =
    {
        name: "Projects",
        type: "folder",
        kids: [coding],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]richie.flores:/Projects~] ',
                name:   'richie.flores',
                completion: function(term, string, callback) {
                    callback([
                              'Coding',
                              ]);},
              }
    };


var home =
    {
        name: "Home",
        type: "folder",
        kids: [aboutme, projects, welcome_txt],
        back: home,
        setg: { prompt: '[[b;lawngreen;black]richie.flores:/~] ',
                name:   'richie.flores',
                completion: function(term, string, callback) {
                    callback([
                              'welcome.txt',
                              'Projects',
                              'AboutMe',
                              ]);},
              }



    };

aboutme.back = home;
projects.back = home;
coding.back = projects;
