const cards = [];
const box = document.createElement("div");
box.id = "box";
main.appendChild(box);
const question = [`מה ההשפעה של החלפת סוג האריזה בגלידונית ונשנושים מקלקר לקרטון?`, `אריזות גלידונית ונשנושים עשויות מקרטון. האם ניתן למחזר אותן?`, `?האם יש שינוי בגלידוניות והנשנושים עצמם במסגרת שינוי האריזה`, `?האם גלידונית ונשנושים באריזת הקרטון החדשה עמידים להפשרה באותה מידה כמו קודם`, `מדוע לא כל האריזות הוחלפו? / מהו המועד בויוחלפו כל האריזות?`, `?מה עמדתכם בעניין רפורמת הסימון של משרד הבריאות`, `?כמה מהפורטפוליו של חברת יוניליוור יהיה מסומן באדום`, `?למה אינכם מורידים את כמויות הסוכר בגלידות`, `?כמה מהפורטפוליו שלכם יהיה מסומן במדבקות אדומות`, `?מדוע לא הפחתתם את כמות הסוכר בקטגורית הילדים בגלידות שטראוס`, `?האם גלידת שטראוס מיוצרת בישראל`, `?האם יש מוצרי לייט באריזות משפחתיות`, `?מתי הוקם מותג גלידת שטראוס`, `?כמה סוכר יש בשלגונים לילדים`, `?האם יש לכם מוצרים ללא סוכר`, `?האם יש לכם מוצרים מופחתי קלוריות`, `?האם גלידה יכולה להתקלקל`, `?האם גלידות שטראוס הן גם בהשגחת הבד"ץ`, `?האם יש מוצרים שאינם בכשרות בד"ץ העדה החרדית`, `?איזה סוג של שומן צמחי יש במוצרי גלידת שטראוס`, `?מה הכוונה ב"מעדן קפוא", למה לא "גלידה"`, `?על האריזה מצוין שהגלידה היא גלידת שמנת היכן השמנת ברשימת הרכיבים`, `?האם יש מוצרים המוכרים על ידי ארגון Vegan friendly`, `?האם יש גלידות טבעוניות`];
const answer = [`אנו מעריכים הפחתה שנתית של כ-40 טון קלקר בשנה`, `בהחלט- הקופסא, מכסה והחוצצים ניתנים למחזור ויש להשליכם לפח הכחול. את העטיפה החיצונית (יריעת הפלסטיק השקופה והדקה העוטפת את האריזה), יש להשליך לפח הכתום`, `לא, השינוי הוא באריזה בלבד, לא נעשה כל שינוי במוצרים עצמם.`, `כן. אריזת הקרטון החדשה שומרת באותה מידה על המוצר.`, `מוצר שאריזתו עודכנה יוצא לשיווק ברגע שהוא מוכן, כך שיתכנו בתקופה הקרובה מוצרים מקבילים עם האריזות החדשות והאריזות הקודמות, בהתאם למלאים הקיימים בחנויות`, `הסימון האדום הוא חלק מהמחויבות לשקיפות מול הצרכן והיא חשובה לצריכה מידתית של המזון. יוניליוור משפרת כבר שנים את הערכים התזונתיים של מוצריה, ומפחיתה סוכר, מלח ושמן רווי במוצריה. כבר בסוף 2012 הוצאנו את השומן טרנס מכלל מוצרי החברה. הרפורמה האיצה תהליכים ואנו מברכים על כך. יוניליוור תמשיך לשפר את הערכים התזונתיים של מוצריה תוך שמירה על הטעם ומתן מענה להעדפות צרכנינו`, `יוניליוור משפרת כבר שנים את הערכים התזונתיים במוצריה ועל כן רבים ממוצרי החברה לא יסומנו באדום. בקטגורית דגני הבוקר של תלמה לדוגמה, אנו מפחיתים בהדרגתיות כבר מאז 2010 את כמות הסוכר ובקטגורית המוצרים הקולינריים הפחתנו בצורה ניכרת בשנים האחרונות את כמות הנתרן. בשנה האחרונה השיקה יוניליוור מוצרים שונים בקטגוריות השונות, שלא יסומנו, כמו גלידות גודיז (גלידת שטראוס), מיונז מופחת שומן (תלמה), פרוזן- דגני בוקר לילדים (תלמה), רטביי עגבניות (קנור) ורטבים לסלטים (הלמנס). השיפורים שערכה החברה לאורך השנים הביאו לכך שכ-80% מהמוצרים שבקטגורית הקולינריה, וכ 50% מהמוצרים בקטגורית דגני הבוקר לא יסומנו באדום. בקטגוריות הפינוק כמו החטיפים והגלידות, תציע החברה מגוון מוצרים שלא יקבלו סימון אדום.`, `גלידת שטראוס מבית יוניליוור משפרת כל הזמן את הערכים התזונתיים במוצריה תוך מאמץ שלא לפגוע בטעם האהוב והמוכר. מוצרי הילדים בגלידות אינם מסומנים באדום, והופחתו בהם כמויות הסוכר בשיעור של 27% כבר לפני מספר שנים. כחלק מהמגוון הרחב שאנחנו מציעים יש לנו את סדרת הלייט ולאחרונה השקנו את סדרת גודיז, גלידת שמנת מופחתת שומן וקלוריות עד 395 קלוריות בלבד לכל הקופסה. גלידת שטראוס מחויבת להמשך שיפור בפרופיל התזונתי במגוון מוצריה על ידי שיפור במוצרים הקיימים והשקת מוצרים חדשים בעלי פרופיל תזונתי משופר.`, `החברה משפרת כבר שנים את הערכים התזונתיים במוצריה ועל כן רבים ממוצרי החברה עומדים כבר היום בהמלצות משרד הבריאות ולא יסומנו באדום . מוצרי גלידות הילדים, סדרת גודיז ומוצרי הלייט, אינם מסומנים בסימונים אדומים.`, 
`גלידת שטראוס מבית יוניליוור פועלת כבר שנים לשיפור הערכים התזונתיים במוצריה ומפחיתה בהדרגתיות את כמות הסוכר במוצרי הילדים. בגלידות הילדים הפחיתה החברה למעלה מ-27% מכמות הסוכר כך שהחל מינואר 2020 מוצרי הילדים בתוכם "ננסים" ומוצרי לייסנסינג כגון שלגון ספיידרמן לא יהיו מסומנים באדום.`, `ועוד איך! רוב המוצרים שלנו מיוצרים במפעל שלנו בעכו`, `איזו שאלה - בטח שיש! קרמיסימו שוקו וניל לייט, כי לכל המשפחה מגיע להתפנק`, `הכול התחיל ב-1962, אז חברת שטראוס שכרה מפעל קרח בעכו והקימה את מפעל הגלידה הראשון בישראל שייצר גלידה בצורת חרוט (שלימים הפך ל"טילון" המפורסם)`, `מוצרים עם הסמלבמיוחד לילדים מכילים לא יותר מ- 20 גר' סוכר מוסף (ל-100 גרם). כי בינינו, הילדים שלכם מתוקים מספיק ?`, `ברור, קרחוני אייס לייט הם ללא סוכר בכלל? והם טעימים בדיוק כמו המוצרים הרגילים שלנו. כמו כן קיים מגוון מוצרים נוספים ללא תוספת סוכר: מאגדות לייט האחרות וקרמיסימו שוקו וניל לייט`, `Goodizברור! מוצרי הלייט ו`, `הגלידות יוצאות ממפעלנו לאחר שנבדקו בבדיקות קפדניות ומחמירות. אנו מתאמצים על מנת להביא אליכם גלידות איכותיות וטעימות. אם נתקלתם בבעיה נקודתית – אנחנו מזמינים אתכם לפנות למוקד שיתוף הצרכנים שלנו במספר 1800-780-780 או בעמוד הפייסבוק שלנו`,`כן, משרדי הבד"ץ מעניקים השגחה למוצרים`, `אז ככה, מרבית מוצרינו מיוצרים בכשרות בד"ץ העדה החרדית. מספר מועט של מוצרים הינם בכשרות הרבנות בלבד ושם דאגנו לסימון בולט בחזית האריזה`, `שאלה מעולה, התשובה אפילו יותר! רוב מוצרי גלידת שטראוס מכילים שומן דקלים ללא שומן טרנס`, `ואנחנו חשבנו שכבר לא תשאלו! התקן הישראלי מגדיר מוצר כ"גלידה" אם יש בו 8% שומן לפחות. במוצרים בהם הוספנו תוספות עשירות, בחרנו להגביל את אחוז השומן. על כן המוצר נקרא 'מעדן קפוא' ולא גלידה`, `התקן הישראלי מאפשר לקרוא לגלידה "גלידת שמנת" אם היא מבוססת על שומן חלב (שמנת או חמאה), ובמקרה שלנו – הגלידה מבוססת על חמאה`, `סדרת פרוטבוסט של סולרו וגם המהדורה המיוחדת של טילון קורנטו מוכרות על ידי Vegan Friendly. וכמובן שנשמח להוסיף את תו Vegan Friendly למוצרים נוספים בעתיד ?`, `ברור שיש! כל הגלידות המסומנות בחותמת כשרות "פרווה" הן טבעוניות! אנו מקפידים לסמן חלב וביצים אם הם נמצאים בגלידות שלנו. מעבר לכך אין רכיבים אחרים מן החי ואנחנו מזמינים טבעוניים להתפנק עם מגוון הגלידות שלנו`];
class questions {
    question;
    answer;

    constructor(question, answer) {
        this.question = question;
        this.answer = answer;
    }

    rander(i) {
        //הצהרה על דיב חדש והכנסתו לדיב האב
        const card = document.createElement("div");
        card.className = "card";
        card.id = `card${i}`;
        box.appendChild(card);

        let x;
        if(i>=0&&i<=3){x=1;}
        else if(i>3&&i<=9){x=2;}
        else if(i>=10&&i<=12){x=3;}
        else if(i>=17&&i<=18){x=5;}
        else if(i>=22&&i<=23){x=6;}
        else{x=4;}

        document.querySelector(`#card${i}`).innerHTML += `
        <div id="question" class="${i}">${this.question}</div>
        <img src="../../pic/information/${x}.png" id="x">
        <div id="answer" class="${i}">${this.answer}</div>
        <i class="fas fa-plus-circle" id="icon"></i>
        `
        //צביעת מסגרת ע"פ מיקום הכרטיס
        if (i <= 3) {
            card.style.borderColor = "#007d3b";
        }
        else {
            card.style.borderColor = "#e31809";
        }
    }
}
//יצירת מערך הכרטיסים
for (let i = 0; i < question.length; i++) {
    const card = new questions(question[i], answer[i]);
    cards.push(card);
    cards[i].rander(i);
}
