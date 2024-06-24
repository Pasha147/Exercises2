
export const text = {
    Ukr: {
      header: {
        h1: "Грантова Підтримка",
        h2: "новини",
      },
      menu: {
        links: [
          { name: "Про конференцію" },
          { name: "Напрямки" },
          { name: "Щодо участі" },
          { name: "Вимоги" },
          { name: "Співголови" },
          { name: "Завантаження" },
        ],
      },
      main: {
        articles: [],
      },
      footer: {
        p1: " Інститут механіки ім.С.П.Тимошенко НАН України.",
        p2: " 03057 Київ, Україна, вул. Нестерова, 3.",
        em: "Email: conference@inmech.kyiv.ua",
        phone: "Тел: +380(98)903-51-05",
      },
    },
    En: {
      header: {
        h1: "Mechanics",
        h2: "Contemporary Approaches and Future Directions",
      },
      menu: {
        links: [
          { name: "About conference" },
          { name: "Research fields" },
          { name: "To participate in" },
          { name: "Requirements" },
          { name: "Co-chairs" },
          { name: "Downloads" },
        ],
      },
      main: {
        articles: [],
      },
      footer: {
        p1: " S.P.Timoshenko Institute of Mechanics, National Academy of Sciences of Ukraine",
        p2: " 03057 Kyiv, Ukraine, str. Nesterova, 3.",
        em: "Email: conference@inmech.kyiv.ua",
        phone: 'Phone: +380(98)903-51-05',
      },
    },
  };



//-- Articles Ukr----------------------------------------------
text.Ukr.main.articles[0] = (
    <>
      <h2>Вельмишановні колеги!</h2>
      <p style={{ textAlign: "center" }}>
        Організатори запрошують Вас взяти участь у роботі {` `}
        <br />
        <b>
          Міжнародної наукової <br />
          конференції «Механіка: сучасність і перспективи»,
        </b>
        <br />
        Конференція відбуватиметься в<br />
        Інституті механіки ім. С.П Тимошенка <br />
        НАН України
        <br />
        7–11 жовтня 2024 р.
      </p>
    </>
  );
  
  text.Ukr.main.articles[1] = (
    <>
      <p>На конференції передбачаються доповіді з таких напрямків:</p>
      <ol>
        <li>Механіка композитних та неоднорідних середовищ</li>
        <li>Механіка оболонкових систем</li>
        <li>Механіка зв'язних полів у матеріалах та елементах конструкцій</li>
        <li>Механіка руйнування та втома</li>
        <li>Динаміка та стійкість руху механічних систем</li>
      </ol>
    </>
  );
  
  text.Ukr.main.articles[2] = (
    <>
      <h2 style={{ textAlign: "start" }}>
        Для участі у роботі конференції необхідно:
      </h2>
      <p style={{ textAlign: "justify" }}>
        До 1 вересня 2024 р. надіслати на адресу Оргкомітету оформлені згідно з
        вимогами матеріали доповіді та заповнені реєстраційні форми на кожного
        учасника.
      </p>
      <p>
        Участь у конференції{" "}
        <em>
          <b>безкоштовна</b>
        </em>
        .
      </p>
      <p>Робочі мови конференції: Англійська, Українська.</p>
      <p>Конференція відбуватиметься у змішаному форматі (онлайн та офлайн).</p>
      <p>
        Матеріали конференції буде опубліковано на сайті Інституту механіки ім.
        С.П. Тимошенка. Кожен учасник, який виступить із доповіддю, отримає
        сертифікат із зазначенням загальної кількості академічних годин: 12 год
        (0,4 кредита ECTS).
      </p>
      <p>Доповіді будуть рецензовані комітетом конференції.</p>
    </>
  );
  
  text.Ukr.main.articles[3] = (
    <>
      <h2 style={{ textAlign: "start" }}>
        Вимоги до оформлення матеріалів доповіді:
      </h2>
      <p style={{ textAlign: "justify" }}>
        Текст доповіді обсягом 1–3 повністю заповнених сторінки слід підготувати у
        вигляді файла формату
        <b> PDF</b> за розміщеними на сторінці конференції шаблонами.
        <br />
        Анкети та тексти доповідей, які стосуються напрямків розвитку механіки
        (1–5), просимо надсилати за адресою conference@inmech.kyiv.ua. До розгляду
        буде прийматися не більше 2-х доповідей одного учасника. 
        
       
      </p>
    </>
  );
  
  text.Ukr.main.articles[4] = (
    <>
      <p>
        <b> Співорганізатор конференції:</b>
        <br />
        Національний комітет України з теоретичної і прикладної механіки
        <br />
      </p>
      <p>
        <b> Співголови оргкомітету:</b>
        <br />
        Академік НАН України, Доктор фізико-математичних наук В.Л.&nbsp;Богданов,
        <br />
        Академік НАН України, Доктор технічних наук В.М.&nbsp;Назаренко
        <br />
      </p>
      <p>
        <b>Вчений секретар:</b>
        <br />
        Кандидат фізико-математичних наук Ю.О.&nbsp;Чорноіван
        <br />
      </p>
      <p>
        <b>
          Співголови напрямків конференції: <br />
        </b>
      </p>
      <ul>
        <li>
          <b> Механіка композитних та неоднорідних середовищ:</b> <br />
          Член-кореспондент НАН України, Доктор фізико-математичних наук
          Я.Я.&nbsp;Рущицький,
          <br />
          Доктор фізико-математичних наук В.А.&nbsp;Декрет,
          <br />
          Доктор фізико-математичних наук Є.А.&nbsp;Сторожук <br />
          <br />
        </li>
  
        <li>
          <b>Механіка оболонкових систем:</b>
          <br />
          Член-кореспондент НАН України, Доктор фізико-математичних наук
          О.Я.&nbsp;Григоренко,
          <br />
          Доктор технічних наук П.З.&nbsp;Луговий
          <br />
          <br />
        </li>
        <li>
          <b>Механіка зв'язних полів у матеріалах та елементах конструкцій:</b>
          <br />
          Доктор технічних наук О.З.&nbsp;Галішин, <br />
          Доктор фізико-математичних наук В.Г.&nbsp;Карнаухов
          <br />
          <br />
        </li>
        <li>
          <b>Механіка руйнування та втома:</b>
          <br />
          Член-кореспондент НАН України, Доктор фізико-математичних наук
          М.Ф.&nbsp;Селіванов,
          <br />
          Доктор технічних наук В.П.&nbsp;Голуб
          <br />
          <br />
        </li>
        <li>
          <b>Динаміка та стійкість руху механічних систем:</b>
          <br />
          Академік НАН України, Доктор фізико-математичних наук
          В.Д.&nbsp;Кубенко,
          <br />
          Академік НАН України, Доктор фізико-математичних наук
          А.А.&nbsp;Мартинюк
          <br />
        </li>
      </ul>
      <b>Члени оргкомітету:</b>
      <br />
      Доктор фізико-математичних наук В.А.&nbsp;Максимюк,
      <br />
      Кандидат фізико-математичних наук Л.М.&nbsp;Терещенко,
      <br />
      Кандидат технічних наук П.В.&nbsp;Фернаті,
      <br />
      Кандидат фізико-математичних наук О.О.&nbsp;Хотенко
      <br />
    </>
  );
  text.Ukr.main.articles[5] = (
    <>
      <h2 style={{ textAlign: "start" }}>Завантаження</h2>
      <ul className="ul_downloads">
        <li>
          <a
            href="./files/announcement_uk.docx"
            download="./files/announcement_uk.docx"
          >
            <img src="./img/file.svg" alt="file"></img>
            Інформаційний лист
          </a>
        </li>
        <li>
          <a href="./files/form_uk.doc" download="./files/form_uk.doc">
            <img src="./img/file.svg" alt="file"></img>
            Реєстраційна форма
          </a>
        </li>
        <li>
          <a href="./files/sample_uk.pdf" download="./files/sample_uk.pdf">
            <img src="./img/file.svg" alt="file"></img>
            Зразок оформлення доповідей (pdf)
          </a>
        </li>
        <li>
          <a href="./files/sample_uk.docx" download="./files/sample_uk.docx">
            <img src="./img/file.svg" alt="file"></img>
            Зразок оформлення доповідей (docx)
          </a>
        </li>
        <li>
          <a href="./files/sample_uk.tex" download="./files/sample_uk.tex">
            <img src="./img/file.svg" alt="file"></img>
            Зразок оформлення доповідей (tex)
          </a>
        </li>
      </ul>
    </>
  );
  //-------------========--------------------
  
  //-- Articles En----------------------------------------------
  
  text.En.main.articles[0] = (
    <>
      <h2>Dear colleagues!</h2>
      <p style={{ textAlign: "center" }}>
        The organizers invite you to take <br />
        part in the work of the <br />
        <b>
          International Scientific Conference "Mechanics: Contemporary Approaches
          and Future Directions",
        </b>
        <br />
        The conference will take place at the
        <br />
        S.P. Timoshenko Institute of Mechanics, <br />
        National Academy of Sciences of Ukraine
        <br />
        October 7-11, 2024
      </p>
    </>
  );
  
  text.En.main.articles[1] = (
    <>
      <p>
        The conference anticipates receiving reports from the following
        specialized research fields:
      </p>
      <ol>
        <li>Mechanics of composite and heterogeneous media</li>
        <li>Mechanics of shell systems</li>
        <li>Mechanics of coherent fields in materials and structural elements</li>
        <li>Mechanics of fracture and fatigue</li>
        <li>Dynamics and stability of movement of mechanical systems</li>
      </ol>
    </>
  );
  
  text.En.main.articles[2] = (
    <>
      <h2 style={{ textAlign: "start" }}>
        To participate in the work of the conference, you have to
      </h2>
      <p style={{ textAlign: "justify" }}>
        By September 1, 2024, send report materials and completed registration
        forms for each participant to the address of the Organizing Committee.
      </p>
      <p>
        Participation in the conference is
        <em>
          <b> free</b>
        </em>
        .
      </p>
      <p>The Conference languages are: Ukrainian, English.</p>
      <p>The conference will take place in a mixed format (online and offline).</p>
      <p>
        The materials of the conference will be published on the website of the
        S.P. Timoshenko Institute of Mechanics. Each participant who presents an
        oral report will receive a certificate indicating the total number of
        academic hours: 12 hours (0.4 ECTS credits).
      </p>
      <p>Reports will be reviewed by the Conference commitee.</p>
    </>
  );
  
  text.En.main.articles[3] = (
    <>
      <h2 style={{ textAlign: "start" }}>
        Requirements for preparation of report materials:
      </h2>
      <p style={{ textAlign: "justify" }}>
        The text of the report with the volume of 1–3 pages should be prepared in
        the form of a<b> PDF</b> file according to the templates posted on the
        conference page.
        <br />
        Questionnaires and texts of reports to the branches of mechanics (1–5)
        should be sent to the address conference@inmech.kyiv.ua. No more than 2
        reports from one participant will be considered. 
      </p>
    </>
  );
  
  text.En.main.articles[4] = (
    <>
    <p>
        <b> Co-organizer of the conference:</b>
        <br />
        National Committee of Ukraine on Theoretical and Applied Mechanics
        <br />
      </p>
      <p>
        <b>Co-chairs of the organizing committee:</b>
        <br />
        Academician of NAS of Ukraine, Doctor of Physical and Mathematical Sciences
        V.L.&nbsp;Bohdanov,
        <br />
        Academician of NAS of Ukraine, Doctor of Technical Sciences
        V.M.&nbsp;Nazarenko
        <br />
      </p>
      <p>
        <b>Scientific secretary:</b>
        <br /> Candidate of Physical and Mathematical Sciences
        Yu.O.&nbsp;Chornoivan
      </p>
      <p>
        <b>Co-chairs of the conference areas:</b> <br />
      </p>
      <ul>
        <li>
          <b>Mechanics of composite and heterogeneous media:</b>
          <br />
          Corresponding Member of NAS of Ukraine, Doctor of Physical and
          Mathematical Sciences J.J.&nbsp;Rushchitsky,
          <br />
          Doctor of Physical and Mathematical Sciences V.A.&nbsp;Dekret,
          <br />
          Doctor of Physical and Mathematical Sciences Ye.A.&nbsp;Storozhuk
          <br />
          <br />
        </li>
  
        <li>
          <b>Mechanics of shell systems:</b>
          <br />
          Corresponding Member of NAS of Ukraine, Doctor of Physical and
          Mathematical Sciences O.Ya.&nbsp;Grigorenko,
          <br />
          Doctor of Technical Sciences P.Z.&nbsp;Lugovoy
          <br />
          <br />
        </li>
        <li>
          <b>
            Mechanics of coherent fields in materials and structural elements:
          </b>
          <br />
          Doctor of Technical Sciences O.Z.&nbsp;Galishyn,
          <br />
          Doctor of Physical and Mathematical Sciences V.G.&nbsp;Karnaukhov
          <br />
          <br />
        </li>
        <li>
          <b>Fracture and Fatigue Mechanics:</b>
          <br />
          Corresponding Member of NAS of Ukraine, Doctor of Physical and
          Mathematical Sciences M.F.&nbsp;Selivanov,
          <br />
          Doctor of Technical Sciences V.P.&nbsp;Golub
          <br />
          <br />
        </li>
        <li>
          <b>Dynamics and stability of movement of mechanical systems:</b>
          <br />
          Academician of NAS of Ukraine, Doctor Physical and Mathematical
          Sciences V.D.&nbsp;Kubenko,
          <br />
          Academician of NAS of Ukraine, Doctor Physical and Mathematical
          Sciences A.A.&nbsp;Martyniuk
          <br />
        </li>
      </ul>
      <b>Members of the organizing committee:</b>
      <br />
      Doctor Physical and Mathematical Sciences V.A.&nbsp;Maksymyuk,
      <br />
      Candidate of Physical and Mathematical Sciences L.M.&nbsp;Tereshchenko, 
      <br />
      Candidate of Technical Sciences P.V.&nbsp;Fernati,
      <br />
      Candidate of Physical and Mathematical Sciences О.О.&nbsp;Khotenko
      <br />
    </>
  );
  text.En.main.articles[5] = (
    <>
      <h2 style={{ textAlign: "start" }}>Downloads</h2>
      <ul className="ul_downloads">
        <li>
          <a
            href="./files/announcement_en.docx"
            download="./files/announcement_en.docx"
          >
            <img src="./img/file.svg" alt="file"></img>
            information letter-message
          </a>
        </li>
        <li>
          <a href="./files/form_en.doc" download="./files/form_en.doc">
            <img src="./img/file.svg" alt="file"></img>
            Registration form
          </a>
        </li>
        <li>
          <a href="./files/sample_en.pdf" download="./files/sample_en.pdf">
            <img src="./img/file.svg" alt="file"></img>
            Report design sample (pdf)
          </a>
        </li>
        <li>
          <a href="./files/sample_en.docx" download="./files/sample_en.docx">
            <img src="./img/file.svg" alt="file"></img>
            Report design sample (docx)
          </a>
        </li>
        <li>
          <a href="./files/sample_en.tex" download="./files/sample_en.tex">
            <img src="./img/file.svg" alt="file"></img>
            Report design sample (tex)
          </a>
        </li>
      </ul>
    </>
  );
  




