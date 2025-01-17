const card = JSON.parse(sessionStorage.getItem("detailsOFcard"));

//תמונה מתאימה למגזין בראש העמוד
const img = document.getElementById("img");
img.innerHTML += `<img src="../../pic/magzin/pages/${card.Picture + 1}.png" id="img">`;

const magazins = [
//1
`
החדשות הטובות: עונת הקרמבו סוף סוף נפתחה!
<br></br>
החדשות הטובות עוד יותר: ויתרנו על עטיפות האלומיניום באריזות השמינייה!
<br></br>
אנחנו כאן כדי להפוך את השינוי לכמה שיותר כיפי, בעזרת כמה טיפים שימושיים שישמרו על הקרמבו שלנו טרי טרי!
<br></br>
בואו נתחיל!
<br></br>
<img src="../../pic/magzin/pic_magzin/1/1.webp" id="img_m">
<br></br>
<h2>
1. אין להשאיר את המארז במקום חם
</h2>
לא ברור איך ולמה, אך לרובנו יש מן הרגל מוזר להניח את הקרמבו מעל המקרר במחשבה שזהו מקום מוצל וקריר, מה שלגמרי לא נכון- ואולי אפילו הפוך! מקררים ביתיים פולטים חום מדפנותיהם ולקרמבו שלנו ממש חם שם!
<br></br>
אנחנו ממליצים לאחסן את הקרמבו בתוך ארון מוצל וקריר באמת כדי ליהנות ממנו כמו שצריך!
<br></br>
<h2>
2. לא לשכוח לסגור את המארז
</h2>
אנחנו יודעים, ממש קשה לעמוד בפיתוי ולאכול רק קרמבו אחד בכל פעם! אין עם זה שום בעיה, פרט לעובדה שהרבה פעמים אנחנו שוכחים להקפיד על סגירת המארז.
<br></br>
כדי להימנע מביקורי פתע לא רצויים של לחות, חום או נמלים- הקפידו לסגור היטב את מארז הקרמבו!
<br></br>
<img src="../../pic/magzin/pic_magzin/1/2.webp" id="img_m">
<br></br>
<h2>
3. מניחים את האריזה בעדינות
</h2>
האריזה החדשה שלנו אמנם נראית קשיחה מבחוץ, אבל אל תשכחו שהקרמבו שלנו בפנים הוא עדין ורך (אפילו יותר מביצה)!
<br></br>
קניתם את מארז הקרמבו שלנו בסופר? הניחו אותו בעדינות לידכם בדרך הביתה, אין לדעת מה יקרה בתא המטען!
<br></br>
<img src="../../pic/magzin/pic_magzin/1/3.webp" id="img_m">
<br></br>
<h2>
ולטיפ האחרון והחשוב ביותר:
</h2>
תיהנו מכל ביס מהקרמבו שלנו, העונה שלו כלכך קצרה! <i class="far fa-smile-wink"></i>
<br></br>
שתהיה לכולנו עונת קרמבו טעימה ומפנקת!
<br></br>
<video controls id="mp4_m">
    <source src="../../pic/magzin/pic_magzin/1/4.mp4" type="video/mp4">
    <source src="../../pic/magzin/pic_magzin/1/4.ogg" type="video/ogg">
 </video>
`
,
//2
`
הקיץ כבר כאן ואיתו גם הים, החופש ובעיקר- החום!
<br></br>
מי לא מכיר את זה? מטיילים בסופר ומוסיפים גלידת שטראוס קרה ומפתה לעגלה, אך מגיעים הביתה ומגלים שהיא כבר 'לא איתנו'.
<br></br>
איך מונעים, איך נמנעים ואיך נהנים מהגלידות האיכותיות שלנו עד הסוף?
<br></br>
קבלו כמה טיפים קטנים שיעשו לכם ולגלידות שלנו את הקיץ!
<br></br>
<img src="../../pic/magzin/pic_magzin/2/1.webp" id="img_m">
<br></br>
<h2>
1. קרוב לבית, קרוב ללב
</h2>
לכולנו יש את הסופר הרחוק ההוא, שבו מוכרים דבר מאוד ספציפי שאנחנו אוהבים- בזול.
<br></br>
הגלידות שלנו לא מחבבות נסיעות ארוכות. הקפידו לקנות את הגלידות שלנו בסופר הקרוב לביתכם על מנת שישהו כמה שפחות זמן מחוץ למקפיא ברכב החם!
<br></br>
<h2>
2. שומרים את המתוק לסוף
</h2>
אתם בסופר, עוברים ליד מקרר הגלידות ומתחשק לכם לקחת את כולן הביתה. מצוין!
<br></br>
רק מה? אל תתנו לגלידות שלנו לחכות איתכם את כל סיבוב הקניות. אספו אותן רק בדרככם אל הקופה, לקראת סוף הקניות, על מנת שיישארו בקירור כמה שיותר זמן
<br></br>
<img src="../../pic/magzin/pic_magzin/2/2.webp" id="img_m">
<br></br>
<h2>
3. הו, נפלאות האונליין
</h2>
הפסקתם ללכת לסופר והתחלתם לעשות קניות אונליין? מושלם!
<br></br>
למה מושלם? כיוון שאם תוסיפו את הגלידות שלנו לסל הקניות שלכם אונליין, תסירו דאגה מלבכם ותקבלו אותן מקוררות ובאיכות מעולה עד לפתח דלתכם עם השליח! J
<br></br>
יותר טוב מזה- אין!
<br></br>
<img src="../../pic/magzin/pic_magzin/2/3.webp" id="img_m">
<br></br>
<h2>
ולטיפ האחרון והחשוב ביותר:
</h2>
זה לא משנה איך תאכלו את הגלידות שלנו-
<br></br>
לבד, ביחד, בצלוחית, בגביע או מהקופסה
<br></br>
העיקר שתיהנו מכל כפית וכל רגע! <i class="far fa-smile-wink"></i>
<br></br>
<video controls id="mp4_m">
    <source src="../../pic/magzin/pic_magzin/2/4.mp4" type="video/mp4">
    <source src="../../pic/magzin/pic_magzin/2/4.ogg" type="video/ogg">
 </video>
`
,
//3
`
<h1>
Goodiz שם, Goodiz כאן Goodiz Goodiz כל הזמן!
</h1>
דמיינו לעצמכם תענוג מדהים – שלגון גלידת שמנת טעימה שמצופה בחציו בשוקולד מעולה. עד כה נשמע כיף, לא? אבל מה אם נגיד לכם שאתם יכולים להנות מהשלגון המעולה בפחות מ-100 קלוריות, נשמע כבר כמו חלום, נכון?!
אז הכירו את מאגדת שלגוני Goodiz!
<br></br>
תאמינו או לא, גודיז היא גלידת שמנת טעימה ומופחתת קלוריות שפותחה ממש כאן, בישראל!
סדרת גלידות Goodiz היא אחת הסנוניות הראשונות בתחום גלידות הwellness בארץ: מדובר על גלידות מופחתות קלוריות אך לא מופחתות טעם(!), שהן הטרנד הכי חם (או קר) בעולם כרגע, וכמה כיף שזה כאן בישראל!
<br></br>
בסדרת Goodiz קיימות 2 מאגדות בטעמים מפנקים: מאגדת גודיז שלושה שוקולדים ומאגדת גודיז שוקולד לבן ותות שדה. בכל מאגדת יש 5 שלגונים כך שאפשר להתפנק כל המשפחה יחד, או לבד, יש מספיק לכולם
<br></br>
<img src="../../pic/magzin/pic_magzin/3/1.webp" id="img_m">
<br></br>
שלגון Goodiz הוא אלטרנטיבה מעולה לפינוק במנה מדודה וטעימה. מהיום אפשר לסגור את הפינה בכיף שלך!
אז גם אם מתחשק לכם משהו מתוק באמצע היום, קינוח קטן אחרי ארוחת הצהריים, או משהו להתרענן איתו, תתפנקו בשלגון Goodiz שלושה שוקולדים המכיל 85 קלוריות בלבד! או בשלגון שוקולד לבן ותות שדה המכיל 88 קלוריות בלבד!
<br></br>
אז יש לנו wellness , יש טעמים מפנקים ויש מספיק לכולם, כל מה שנותר הוא רק לאכול Goodiz בהנאה.
<br></br>
<b>
שיהיה לכולנו קיץ שמח, טעים ומלא בכיף!
</b>
`
,
//4
`
ולא סתם בבית – בקבוצות! המאגדות של גלידת שטראוס יכבשו הקיץ את המקפיא שלכם. אז מה תרצו: מגנום, קורנטו, שלגון פסק זמן או מצופים שוקו בננה?
<br></br>
הצרכן הישראלי אוהב לקחת את הפינוק האישי והכיף של הגלידה גם הביתה: יותר ויותר צרכנים מגדילים את צריכת השלגונים במאגדות, בנוסף לצריכה המוכרת של הגלידות הביתיות.
<br></br>
דבר זה הוא סיבה של שתי מגמות מצטלבות: הנטייה של צרכני הגלידה הישראלים לכיוון הפרימיום, גלידות איכותיות ומפנקות ורצון הצרכנים לחוות את חוויית השלגונים גם בבית, בחיק המשפחה או לבד.
<br></br>
אין מה לעשות: כולנו רוצים את השלגונים שלנו מרגשים ומושקעים יותר, אנחנו רוצים אותם זמינים בכל מקום, גם בבית וככה גדלה לה המגמה המתוקה של צריכת מאגדות שלגונים אישיים לצריכה ביתית.
<br></br>
גלידה בבית הייתה ותהיה תמיד חוויה משפחתית, אך בני המשפחה הישראלים רוצים לחוות את התענוג לפעמים גם כל אחד בנפרד ובטעם אחר– עם שלגון איכותי אישי. בדיוק על צורך זה עונות המאגדות, אותן אריזות צבעוניות המאגדות מספר שלגונים מסוג מסוים, ולפעמים גם שילוב של שלגונים שונים. המאגדות, אותן ניתן למצוא במגוון נקודות מכירה- צפויות להמשיך ולגדול גם בקיץ 2019, היישר למקפיא של צרכנים רבים.
<br></br>
גלידת שטראוס, שמובילה את נתח השוק של עולם הגלידה בישראל, מציגה גם השנה מבחר מרשים וטעים בתחום המאגדות. כאלו שאיתנו כבר שנים וגם מאגדות חדשות שהגיעו אלינו ממש הקיץ! קבלו את נבחרת המאגדות של גלידת שטראוס לקיץ 2019!
<br></br>
<b>
מאגדת מיני מגנום דאבל פיסטוק ושוקולד
</b>
<br></br>
שלגון השמנת הנהדר והאהוב בטעם פיסטוק, מצופה בקרם קקאו ובציפוי מכיל שוקולד חלב מעולה. בנוסף מכילה המאגדת גם שלגוני שוקולד מעולים. עכשיו, במאגדת המכילה שש יחידות (שלוש לכל טעם), זה פינוק משפחתי מהמם, שישלח אתכם די מהר לסופר לחידוש מלאי. מאגדת שכל כולה כיף.
<br></br>
<img src="../../pic/magzin/pic_magzin/4/1.webp" id="img_m">
<br></br>
<b>
מאגדות קורנטו  
</b>
<br></br>
קורנטו, נסיך העולם הפתוח וחוף הים, כובש גם את הבית. כמה טעים לנשנש אותו על הכורסא מול הטלוויזיה או אחרי ארוחה טובה – עם כל המשפחה, כמובן.
<br></br>
ויש אפילו שני סוגים של מאגדות: מאגדת קורנטו וניל קלאסי המוכר והטעים כל כך ובנוסף, מאגדת קורנטו וניל טבעוני פרווה בכדי בכולם יוכלו ליהנות מכל הטוב הזה
<br></br>
<img src="../../pic/magzin/pic_magzin/4/2.webp" id="img_m">
<br></br>
<br></br>
<b>
מאגדת מיני שלגון פסק זמן
</b>
<br></br>
מעדן קפוא בטעם נוגט עם ריפל שגם הוא בטעם נוגט וציפוי שוקולד חלב, עם דגנים פריכים. המאגדת, המכילה 5 יחידות, תהיה אורחת רצויה בכל מקפיא ישראלי שבעליו אוהבים את החטיף המיתולוגי או את המתיקות המופלאה של טעם הנוגט.
<br></br>
<img src="../../pic/magzin/pic_magzin/4/3.webp" id="img_m">
<br></br>
<b>
מאגדת מצופים שוקו בננה:
</b>
<br></br>
נוסטלגיים? זה בשבילכם- מאגדת בת 10 יחידות, עם שלגונים בטעמי שוקולד ובננה, מצופים צימקאו. שילוב שקשה לעמוד בפניו.
<br></br>
המוצר קיים כבר, אך כעת תוכלו למצוא אותו בנראות קיצית ומרעננת עם אריזה חדשה!
<br></br>
<img src="../../pic/magzin/pic_magzin/4/4.webp" id="img_m">
`
,
//5
`
נא להכיר: נבחרת השוקולד החדשה של גלידת שטראוס!
<br></br>
אם תשאלו את חובבי המתוק בארץ ובעולם, אין כאן בכלל שאלה: הם תמיד ידרגו את הגלידה ואת השוקולד בשלישייה הראשונה של המוצרים האהובים עליהם. אז מה נאמר על גלידה בטעם שוקולד, או על השילוב המהמם של גלידה בציפוי שוקולד מפנק? הטוב מכל העולמות, אלא מה.
<br></br>
גלידת שטראוס פותחת את עונת קיץ 2019 בחגיגה מפנקת, עם כמה ממוצרי גלידת השוקולד האהובים והמוכרים ביותר בישראל. החגיגה כוללת הפעם לא מעט אטרקציות לנהנתנים ללא גבולות שביניכם, אבל גם חדשות טובות לשומרי המשקל עם מוצרים מפנקים- ועם זאת מופחתי שומן וקלוריות. בואו לגלות מה מחכה לכם.
<br></br>
<img src="../../pic/magzin/pic_magzin/5/1.webp" id="img_m">
<br></br>
<b>
מגנום דאבל פיסטוק:
</b>
<br></br>
מגנום, המותג האהוב מבית גלידת שטראוס של יוניליוור, ממשיך לפנק ולחדש עם שלגוני שוקולד טעימים במיוחד. האצטקים, שהמציאו את השוקולד, אהבו אותו בכלל מר, אבל אז נכנסו לתמונה האירופים והוסיפו סוכר לפולי הקקאו. והנה, אנחנו כאן, בהווה. זה הזמן להתמסר לתענוג עם שלגון השמנת החדש והמפנק של מגנום: דאבל פיסטוק. היכונו להתמסר לתענוג!
<br></br>
<img src="../../pic/magzin/pic_magzin/5/2.webp" id="img_m">
<br></br>
<b>
שוקובו לבן–
</b>
<br></br>
שוקובו, מלך הילדות של כולנו עם גרסה חדשה ומשופרת לשוקובו הלבן- ליבה בטעם נוגט כל כך טעימה ומפנקת שאתם חייבים לנסות.
השוקולד אמנם נחשב לטעם השני בפופולריות שלו בגלידות, אחרי הווניל – אבל השוקובו הוא פינוק שרק מעטים מצליחים, אם הם בכלל מנסים, לעמוד בו.
<br></br>
<img src="../../pic/magzin/pic_magzin/5/3.webp" id="img_m">
<br></br>
<b>
קרמיסימו פיסטוק ושוקלד:
</b>
מעדן קפוא בטעמי פיסטוק ושוקולד עם ריפל בטעם שוקולד. שילוב כל כך מוצלח וטעים שלא ברור לנו איך לא חשבו עליו קודם… קחו כפית ותיהנו!
<br></br>
<img src="../../pic/magzin/pic_magzin/5/4.webp" id="img_m">
<br></br>
<b>
קרמיסימו בננה שוקו צ'יפ:
</b>
 גלידה בטעמי שוקולד ובננה עם ריפל בטעם שוקולד ושבבי שוקולד חלב. וכל הטוב הזה אצלכם בבית, יאמי!
 <br></br>
 <img src="../../pic/magzin/pic_magzin/5/5.webp" id="img_m">
 <br></br>
 <br></br>
<b>
גודיז פיסטוק שוקולד מריר:
</b>
 גלידת שמנת מפנקת מופחתת שומן וקלוריות ועדיין טעימה לאללה, בטעם פיסטוק עם ריפל בטעם שוקולד ושברי אגוזי לוז. רק 141 קלוריות ל-100 גרם וכ-395 קלוריות בקופסה. וזה לא הכול: הפעם גם פינקנו בתוספת 20 גרם חלבון! ואתם יכולים להתענג בלי רגשות אשם!
 <br></br>
 <img src="../../pic/magzin/pic_magzin/5/6.webp" id="img_m">
<br></br>
<b>
משפחת פסק זמן:
</b>
 רביעיית מוצרים מנצחים בעלי הטעם השוקולדי הכל כך אהוב!
שני מוצרים חדשים מצטרפים הקיץ למשפחה: שלגון פסק זמן וקורנטו פסק זמן (עם דיסק שוקולד מעולה!), שמצטרפים לחטיפים הקיימים והאהובים: חטיפי הגלידה של פסק זמן בטעמי שוקולד חלב ושוקולד לבן.
<br></br>
<img src="../../pic/magzin/pic_magzin/5/7.webp" id="img_m">
`
,
//6
`
טבעונים יקרים, תכירו: זה מה שמחכה לכם בגלידת שטראוס בקיץ 2019
<br></br>
כשיותר ויותר אנשים עוברים לתזונה נטולת בשר, דגים, ביצים ומוצרי חלב, ברור כי המגמה הטבעונית רק הולכת וגוברת. גלידת שטראוס נערכת בהתאם ומציגה מגוון של שלגונים וגלידות על טהרת הטבעונות. קיץ 2019 כבר כמעט כאן, והשנה ברור לכולם שהמקפיא יכלול שלל הפתעות משמחות גם לטבעונים.
<br></br>
מעבר לכיף ולגיוון, בקהילה הטבעונית בישראל יש רבים שרואים בהצלחה של גלידת שטראוס להשיק גרסאות טבעוניות למוצרי דגל בתחום הגלידות והשלגונים, למשל הטילון הטבעוני, ציון דרך חשוב ועליית מדרגה של ממש בתרבות הטבעונית, שהולכת ותופסת מקום חשוב וקבוע בהרגלי הצריכה שלנו.
<br></br>
החגיגה הטבעונית הזו מתאימה גם לכם, שומרי הכשרות. מעכשיו גם אתם תוכלו לקנח בשלגון או אפילו בטילון, אחרי ארוחה בשרית. אז אילו גלידות ושלגונים טבעוניים מחכים לנו הקיץ בגלידת שטראוס? בואו נכיר אותם אחד אחד.
<br></br>
<b>
מאגדת קורנטו טבעוני
</b>
<br></br>
הקהילה הטבעונית הישראלית נהנית עם הגרסה הטבעונית לטילון הקלאסי, אחד ממוצרי הדגל של גלידת שטראוס כבר שנים. הטילון הטבעוני יחכה לכם במאגדת כגלידת פרווה טעימה במיוחד בטעם וניל, עם צימקאו, וופל  ושברי אגוזי לוז מסוכרים. לטבעונים שרוצים להיות בטוחים? חפשו על עטיפת הקורנטו הטבעוני את תו ה- Vegan Friendly  של עמותת וויגן פרנדלי. זה הסימן שלכם שמותר להתחיל להתפנק.
<br></br>
טילוני הקורנטו הטבעוניים של גלידת שטראוס נמכרים במאגדת של שש יחידות, המתאימה מאוד גם לצריכה משפחתית ולפינוק רב משתתפים לאחר ארוחות משפחתיות חגיגיות וגדולות.
<br></br>
<img src="../../pic/magzin/pic_magzin/6/1.webp" id="img_m">
<br></br>
<b>
סדרת סולרו
</b>
<br></br>
מה יותר טבעוני ומרענן מגלידת סורבה בשלל טעמי פירות? סדרת סולרו של גלידת שטראוס כוללת שלגונים טבעוניים בטעמים נפלאים כמו קוקוס-אננס, מנגו-פסיפלורה  ותות-פרי יער. השלגונים מכילים 50% פרי ורק כ-67 קלוריות ליחידה, כך שהם מתאימים גם למי שמעוניין לשמור על הגזרה.
<br></br>
תו הוויגן פרנדלי מתנוסס גם על על מוצרי סולרו הטבעוניים. ניתן לקנות שלגונים בודדים בקיוסקים, בפיצוציות, על חוף הים ובנקודות מכירה נוספות. רוצים את סולרו אצלכם במקרר? הם נמכרים גם במאגדות של 5 יחידות בסופר ובמכולות.
<br></br>
<img src="../../pic/magzin/pic_magzin/6/2.webp" id="img_m">
<br></br>
<b>
שלגון טורטית
</b>
<br></br>
עוד מוצר של כיף טהור, שמעוטר גם הוא בתו הוויגן פרנדלי. נראה אתכם אומרים לא לשלגון טבעוני, המבוסס על החטיף המיתולוגי בטעם רום ושקדים, עם נגיעות שברי שקדים ושוקולד מריר בציפוי.
<br></br>
שלגון הטורטית, ממש כמו וופל הטורטית המקורי- טבעוני ופרווה – סיבה מצוינת נוספת לחיוך גדול גם אצל שומרי הכשרות.
<br></br>
<img src="../../pic/magzin/pic_magzin/6/3.webp" id="img_m">
`
,
//6
`
פסח, אי אפשר להחמיץ את זה, הוא אחד החגים העבריים הצבעוניים ביותר. בחג האביב הטבע והשדות פורחים בשלל  צבעים וניחוחות משכרים, פריחה שגולשת גם אל מדפי הסופר והמכולת, שם מבצבצים מוצרים חדשים כמעט על כל המדפים, שנראים עמוסים עוד יותר מתמיד.
<br></br>
לקראת פסח 2019 גלידת שטראוס מציגה סדרה מרשימה של מוצרים כשרים לפסח- חדשים וקיימים.
<br></br>
בגזרת הגלידות החגיגה כוללת את כל הגילאים, החל בקטנטנים וכלה בנו, המבוגרים שלא יוותרו לעולם על רגעים קסומים של גלידה משובחת.
<br></br>
אז מה מחכה לנו השנה, בחג האביב? אתם מוזמנים להיכרות ראשונית עם הכשרים לפסח, הנבחרת הכשרה הכי טעימה שיש.
<br></br>
<b>
סדרת סולרו – כל המוצרים
</b>
<br></br>
סדרת שלגוני הפירות המרעננת תלווה אותנו בכל ימי החג, והיא כשרה לחלוטין לפסח. נמאס לכם קצת מהמצות? כל הטעמים האהובים כאן בשבילכם: קוקוס-אננס, מנגו-פסיפלורה, וכמובן –  תות-פרי יער. השלגונים מכילים 50% פרי ובין 55 ל-67 קלוריות ליחידה. כולם, אגב, טבעוניים לחלוטין.
<br></br>
<b>
שורה תחתונה:
</b>
כמה טעימים – ככה בריאים!
<br></br>
<img src="../../pic/magzin/pic_magzin/7/1.webp" id="img_m">
<br></br>
<b>
קורנטו כשר לפסח
</b>
<br></br>
הטילון, אותו גביע מוקפא וממולא בגלידה שנראה כמו קרן קטנה או כמו כובע הפוך של ליצן, נחשב גם כיום לאחד המוצרים האהובים והמפנקים ביותר בעולם הגלידה. השנה אתם מוזמנים להתענג על קורנטו כשר לפסח, שהוא גם ללא גלוטן! אותו ניתן להשיג כבודד או במאגדת לצריכה ביתית.
<br></br>
<b>
שורה תחתונה:
</b>
 קלאסי כל השנה – וגם בפסח.
<br></br>
<img src="../../pic/magzin/pic_magzin/7/2.webp" id="img_m">
<br></br>
<b>
מיני לייט אפרסק
</b>
<br></br>
פסח הוא תקופה מאתגרת לשומרי משקל ודיאטה. זה חג טעים, אין ספק, אבל יש שיאמרו גם משמין. מצה אחת הרי שווה 2-3 פרוסות לחם ועוד לא אמרנו מלה על האבוקדו או על השוקולד שרבים מאתנו כל כך אוהבים למרוח עליה.
<br></br>
בקיצור, זה בדיוק הזמן לשלגון לייט, עם 35 קלוריות בלבד ליחידה. מיני לייט אפרסק משמש קהל רחב של גברים ונשים, שמחפשים עונג טעים ומתוק לקינוח או לנשנוש בין ארוחות. במקום "לגנוב" עוד ועוד כפיות מקופסת הקרמיסימו במקרר, ניתן להחזיק כגיבוי חבילה של שלגוני מיני לייט אפרסק ולבלום איכשהו את הפיתוי.
<br></br>
<b>
שורה תחתונה:
</b>
מתוק ובלי רגשות אשם – הפשע המושלם.
<br></br>
<img src="../../pic/magzin/pic_magzin/7/3.webp" id="img_m">
<br></br>
<br></br>
<b>
קרמיסימו בננה טופי
</b>
<br></br>
זהירות, לפניכם מוצר שתתקשו להפסיק לאכול ממנו! הגלידה בקופסה בטעם בננה טופי מיועדת לאנשים שאוהבים להתענג על מה שהחיים וגלידת שטראוס מציעים להם – ולא שוכחים לשתף בעונג את כל המשפחה.
<br></br>
ידעתם כי הישראלי צורך בשנה בממוצע כ-5.1 ליטר גלידה – ושהנתון הזה נמצא בעלייה מתמדת? אין ספק: אהבתנו לגלידה גדלה כל הזמן. זה קורה בזכות הגיוון העצום בשוק הגלידות בכלל – ובסדרת קרמיסימו המשפחתית והנפלאה בפרט. הבננה טופי הצטרף למשפחה רק לאחרונה וכבר נשאר אתנו בפסח. יאמי.
<br></br>
<b>
שורה תחתונה:
</b>
 שילוב מנצח שאי אפשר לעמוד בפניו.
 <br></br>
 <video controls id="mp4_m">
 <source src="../../pic/magzin/pic_magzin/7/4.mp4" type="video/mp4">
 <source src="../../pic/magzin/pic_magzin/7/4.ogg" type="video/ogg">
</video>
<br></br>
<b>
מגנום כשר לפסח
</b>
<br></br>
על רקע מזג האוויר המתחמם במהירות, חדשות מעולות לסיום: סדרת מגנום – מגנט אמיתי בכל פיצוציה, מכולת, חנות נוחות, קיוסק או על שפת הים – מציעה גם השנה כמובן מגוון  מוצרים כשרים לפסח. בשלגונים הבודדים תוכלו ליהנות ממגנום לבן, מגנום שקדים, מגנום אגוז לוז ומגנום דואט שוקולד עם נוגט. בגזרת המאגדות הביתיות תוכלו להמשיך ליהנות מהמאגדות הקיימות: מגנום לבן ושקדים, מגנום קלאסיק, מגנום מיני דואט שוקולד עם נוגט. כולם יחכו לכם בחג, בדרך אל הים או ממנו, או סתם כשבא לכם לברוח לכמה רגעים לפנטזיה מתוקה וקרירה.
<br></br>
<b>
שורה תחתונה:
</b> 
בא לכם אחד עכשיו? זה כשר לפסח!
<br></br>
<img src="../../pic/magzin/pic_magzin/7/5.webp" id="img_m">
`
,
//8
`
כולנו כבר הספקנו לשכוח שפעם היינו נהנים מגלידות ושלגונים רק בחודשי הקיץ. איזה כיף לגלות שכשמדובר באהבות שלנו, אפשר בהחלט לפרוץ את הגבולות ולאפשר לעצמנו ליהנות מגלידה טעימה או מאיזה שלגון בכל יום או שעה בלי לעשות חשבון, ממש ככה, בלי להתחשב בעונה או להסתכל בלוח השנה.
<br></br>
כבר הרבה שנים שהגלידות והשלגונים שלנו הם חלק בלתי נפרד מהבית הישראלי, ואנחנו בגלידת שטראוס גאים בכך שמגוון המוצרים שלנו תופסים לעצמם מקום חשוב כמעט בכל מקפיא. חדשנות היא מילת המפתח שלנו ומדי שנה שוקדים מיטב המומחים שלנו בגלידת שטראוס על פיתוח מוצרים חדשים ומלהיבים בשלל צורות ומרקמים, המאפשרים לכם ליהנות מגלידות איכותיות, מבלי להתפשר על הערכים התזונתיים או על הטעמים הנפלאים שאתם כל-כך אוהבים.
<br></br>
אנחנו בגלידת שטראוס עושים הכל כדי שבכל פעם שבא לכם להתפנק פשוט תושיטו יד אל המקפיא ובן רגע תמלאו את שגרת החיים שלכם ברגעים קסומים של אושר ובים של טעמים נפלאים, גם אם אתם שומרים על המשקל, מקפידים על אורח חיים בריא ותזונה מאוזנת, רגישים לגלוטן או טבעונים.
<br></br>
גם השנה, עכשיו כבר מותר לגלות, מחכות לכם הפתעות משמחות בתוך המקפיאים הכוללות שילובים חדשים ומרגשים של מרכיבים ומרקמים בשלל צורות, צבעים וטעמים. אנחנו לא יודעים מה אתכם, אבל אנחנו כבר ממש-ממש מתרגשים. אז הנה מה שמחכה לכם בתוך המקררים:
<br></br>
<b>
סולרו קוקוס-אננס
</b>
<br></br>
למשפחת סולרו, סדרת שלגוני הפירות המרעננת המכילים 50% פרי (כ-88 קלוריות ביחידה), נולד השנה טעם חדש וטבעוני: קוקוס-אננס – סורבה פרווה מרענן בטעם טרופי מנצח בעל מרקם עשיר ומפנק שלא תרצו שייגמר. סולרו קוקוס-אננס החדש יצטרף לטעמי גלידות הסורבה המוכרים והאהובים מסדרת סולרו: מנגו-פסיפלורה, אננס-אפרסק, תות-פרי יער (שהם כולם גם טבעוניים!) וגם וניל פירות טרופיים. אז תתכוננו להתאהב.
<br></br>
<video controls id="mp4_m">
<source src="../../pic/magzin/pic_magzin/8/1.mp4" type="video/mp4">
<source src="../../pic/magzin/pic_magzin/8/1.ogg" type="video/ogg">
</video><br></br>
<b>
קרמיסימו טופי-בננה
</b>
<br></br>
למשפחת גלידת קרמיסימו, הגלידה המשפחתית האהובה ביותר, הצטרף העונה טעם חדש ומלהיב – בננה טופי: גלידה חלבית בטעם בננה עם ריפל בטעם טופי קרמל מפנק, שלא תוכלו להפסיק ללקק. הטעם החדש מצטרף לנבחרת החלומות האהובה של קרמיסימו: שלושה שוקולדים, בננה-שוקולד צ'יפ, ריבת חלב, וניל צ'יפ, וניל עוגיות, תותים ושוקולד לבן, מסטיק וניל מסטיגם, וניל צרפתי, סורבה תות-לימון, סורבה פסיפלורה ופרי יער, ושוקו צ'יפ וניל צ'יפ.
<br></br>
<video controls id="mp4_m">
<source src="../../pic/magzin/pic_magzin/8/2.mp4" type="video/mp4">
<source src="../../pic/magzin/pic_magzin/8/2.ogg" type="video/ogg">
</video>
<br></br>
<b>
 שלגון טורטית
</b>
<br></br>
אחד מהחטיפים האהובים והמוכרים ביותר בישראל פותח את העונה עם חגיגה מפנקת שכולנו (תודו שגם אתם) חיכינו לה: שלגון הורס בטעם רום ושקדים עם נגיעות שברי שקדים בציפוי שוקולד מריר. שלגון פרווה כל-כך מפנק, שזה ממש גאוני שהוא גם טבעוני (!). פשוט דמיינו את עצמכם לוקחים ביס מהטורטית האהובה עליכם. אוקיי, עכשיו דמיינו את השוקולד מתפצפץ בפה ואת גלידת הרום-שקדים הקרה נמסה לכם על הלשון… מרגישים? אז זהו, זה בדיוק זה. זהירות! זה ממכר…
<br></br>
<img src="../../pic/magzin/pic_magzin/8/3.webp" id="img_m">
`
,
//9
`
עונת הקרמבו בפתח וזה תמיד מרגש, אבל הפעם יש לנו הפתעה נוספת בשבילכם: הממתק החורפי הלאומי של גלידת שטראוס זוכה לעדכון ומתאים את עצמו לשנת 2019. לא, אין לכם מה לדאוג: הטעם האהוב, המרקם, המראה וכמובן האיכות של הקרמבו לא יעברו כל שינוי; מה שכן ישתנה זה שמעתה הקרמבו ייפרד מעטיפת האלומיניום שלו ויהפוך לידידותי יותר לסביבה.
<br></br>
<img src="../../pic/magzin/pic_magzin/9/1.webp" id="img_m">
<br></br>
בשלב הראשון, עטיפות האלומיניום יוסרו מאריזות קרמבו שמינייה בלבד, שיוצעו למכירה בקופסת פלסטיק קשיחה המגינה על צורתו של הקרמבו העדין וניתנת למיחזור. הקרמבו שיימכר באריזות 20 ו-32 יח' ימשיך להיעטף באופן ידני ויוצע למכירה בעטיפת האלומיניום המקורית, עד שיימצא פתרון סביבתי גם לאריזות הללו.
<br></br>
מדובר במהלך לטווח ארוך, בהתאם ליעדי הקיימות של תאגיד יוניליוור העולמי החותר לצמצום חומרי אריזה, תוך התחייבות שעד 2025 כל אריזות הפלסטיק יהיו ניתנות לשימוש חוזר, מיחזור או הפיכה לקומפוסט. בגלידת שטראוס מציינים שההחלטה על הסרת עטיפות האלומיניום הגיעה לאחר בדיקת הבטחת איכות קפדנית ומתמשכת, שווידאה כי הטעם, המרקם ואורך חיי המדף יישמרו כפי שהיו עד כה.
<br></br>
מתגעגעים ליישור העטיפה? התחילו ליישר >>
<h2>
הישראלים הם צרכני קרמבו כבדים
</h2>
את התוצאות החיוביות ניתן יהיה להרגיש באופן מיידי: כבר בעונת הקרמבו הקרובה שתתחיל בספטמבר ותסתיים בינואר, יצומצם השימוש באלומיניום ביותר מ-13 טון עטיפות, השקולים ל-6,000 קמ"ר של אלומיניום. ומה זה אומר בתכל'ס, אתם שואלים? שאם תחברו את כל עטיפות האלומיניום הללו לאורכן, תוכלו להגיע מירושלים להודו – מרחק של יותר מ-3,800 ק"מ אווירי.
<br></br>
<b>
ואם זה לא מספיק, הנה עוד 5 עובדות על ממתק החורף שלנו שאולי לא הכרתם:
</b>
<br></br>
<P>-
הקרמבו התחיל את דרכו כממתק בשנות הצנע, וזאת הודות לחומרי הגלם הזולים שלו
<P>-
עם השנים, הקרמבו צבר פופולריות רבה והשתרש כחלק בלתי נפרד מהפולקלור הישראלי. זאת למרות שהוא הומצא בכלל בדנמרק לפני כ-200 שנה
<P>-
85% מהישראלים אוכלים קרמבו במהלך העונה, וצרכני הקרמבו הכבדים יותר אוכלים כ-14 קרמבואים בממוצע בעונה
<p>-
איך אנחנו אוהבים לאכול את הקרמבו שלנו? כ-70% מהישראלים מתחילים מהקרם, 20% מתחילים דווקא מהביסקוויט והיתר מצאו דרך יצירתית לאכול את הקרם והביסקוויט יחד
<p>-
הקרמבו מיוצר במפעל של גלידת שטראוס בעכו, ובשיא העונה מיוצרים 450 קרמבואים בכל דקה
<br></br>
<img src="../../pic/magzin/pic_magzin/9/2.webp" id="img_m">
<br></br>
אז בפעם הבאה שתחליטו להתפנק עם קרמבו, תהנו כפליים: גם מהטעם האהוב והמוכר שמלווה אתכם שנים, וגם מהידיעה שתרמתם קצת לאיכות הסביבה.
`
,
//10
`
הסלולר שלכם מצלצל, אתם עונים, ומהצד השני אתם שומעים זוג חברים או את ההורים שלכם אומרים: "מה שלומכם? אנחנו נהיה אחה"צ באזור וחשבנו לקפוץ. מתאים?". עכשיו, יכול להיות שמתאים לכם וזה אחלה, אבל גם אם קצת פחות – זה לא שהשאירו לכם באמת ברירה.
<br></br>
אוקיי, בלי פאניקה. גם אם אין לכם מספיק זמן בשביל להכין את עוגת האירוח המושקעת שלכם או למהר לקונדיטוריה הקרובה לביתכם, אנחנו כאן בשביל לעזור לכם, עם 4 פתרונות הגשה קלילים ומהירים שיהפכו אתכם למארחים המושלמים. מוכנים?
<br></br>
הגלידות הללו מגיעות בטעמים לא סטנדרטיים כך שאתם יכולים להיות בטוחים שהאורחים שלכם יהיו מרוצים. מאוד. פשוט תבחרו את הטעם המועדף עליכם: עוגת גבינה עם שברי עוגיות לוטוס, אלפחורס שוקולד לבן עם ריפל קרמל או בראוניז ובלונדיז. וכשהאורחים יגיעו, פשוט תוציאו מהמקפיא ותגישו. כמה פשוט, ככה טעים.
<br></br>
<b>
עוגת קרמבו חלומית
</b>
<br></br>
ייתכן ואתם שייכים דווקא לאלו שמעדיפים להכין עוגה בכוחות עצמכם, וגם במקרה הזה אנחנו שמחים לסייע לכם. אז אם במקרה פספסתם את המתכון המנצח שלנו לעוגת מוס קרמבו מענגת וקלה להכנה, יש לכם הזדמנות נוספת להכיר את המתכון ולהתיידד איתו באופן אישי.
מילה שלנו: אתם, וכמובן גם האורחים שלכם, הולכים להתאהב בעוגה המושלמת הזו (קליק למתכון), שנותנת את הכבוד הראוי לפינוק העונתי והמעולה הזה
<br></br>
<video controls id="mp4_m">
<source src="../../pic/magzin/pic_magzin/10/1.mp4" type="video/mp4">
<source src="../../pic/magzin/pic_magzin/10/1.ogg" type="video/ogg">
</video>
<br></br>
<b>
גלידוניות פנסי
</b>
<br></br>
אנחנו יודעים שגלידוניות זה בערך הפינוק המושלם לאירוח (גם כשאתם האורחים היחידים בבית), אבל תאמינו לנו או לא – יש לנו גרסה משודרגת לזה. כל מה שאתם צריכים זה שוקולד מריר, שוקולד לבן או ממרח לוטוס, שברי אגוזי לוז מקורמלים, סוכריות צבעוניות  או פירורי עוגיות.
<br></br>
אופן ההכנה הוא פשוט להפליא: ממיסים במיקרוגל את 2 סוגי השוקולד וממרח הלוטוס, בקערות נפרדות. לאחר מכן, יש לטבול את הגלידונית עד לחצי בתערובת המומסת המועדפת עליכם, ולסיום – לטבול לקישוט באחת מ-3 האופציות שמנינו: אגוזי לוז, סוכריות או פירורי עוגיות. וזהו; האורחים שלכם כבר יצטרכו להתמודד עם הדילמה המהותית: איזו גלידונית לאכול קודם. בהצלחה להם עם זה.
<br></br>
<img src="../../pic/magzin/pic_magzin/10/2.webp" id="img_m">
<br></br>
<b>
עוגת טעמקור
</b>
<br></br>
לא חשבתם שניתן לכם ללכת בלי לתת לכם מתכון אחד קצת יותר מפורט, נכון? אל דאגה, עדיין מדובר במתכון פשוט למדי, שבסופו תוכלו לצ'פר את האורחים שלכם עם עוגה שהיא כולה קיץ מרענן. מבטיחים שאף אחד לא יישאר אדיש לכל הטוב הזה.
<br></br>
<b>
מרכיבים:
</b>
<p>1 מיכל (250 מ"ל) שמנת מתוקה להקצפה
<p>1 אינסטנט פודינג וניל (80 גרם)
<p>1 כוס חלב
<p>1/4 כוס סוכר
<p>1 גביע (250 מ"ל) גבינה לבנה 9% שומן
<p>6 יחידות טעמקור
<br></br>
<b>
לזיגוג:
</b>
<p>100 גרם שוקולד מריר חתוך לקוביות
<p>1/2 כוס חלב
<p>אריזת "קליק" חום-לבן
<br></br>
<b>
הוראות הכנה:
</b>
<br></br>
מקציפים יחד שמנת מתוקה, אינסטנט פודינג וניל, חלב וסוכר לקרם יציב.
<br></br>
מקפלים פנימה גבינה לבנה עד לקבלת תערובת אחידה.
<br></br>
מסדרים את שלגוני הטעמקור בתבנית בכיוונים הפוכים לקבלת דוגמת שחמט, מוזגים ומיישרים את הבלילה מעל ומקפיאים כ-4 שעות.
<br></br>
לאחר ההקפאה מכינים את הזיגוג: ממיסים את השוקולד המריר והחלב במיקרוגל במקטעים של 30 שניות, מערבבים היטב ומצננים כמה דקות. מוזגים את השוקולד על העוגה הקפואה, מפזרים כדורי קליק לקישוט ומגישים קר.
<br></br>
<img src="../../pic/magzin/pic_magzin/10/3.webp" id="img_m">
`
,
//11
`
קיץ, אתם יושבים בים, משתזפים בשמש או משחקים מטקות עם חבר, ופתאום אתם שומעים את הקריאה המוכרת: "הלו, ארטיק". לרוב אין באמת התלבטות: חם ולח, ואין כמו שלגון או גלידה מפנקת בשביל לצנן את האווירה. איפה כן יש התלבטות? בסוג השלגון שאתם מבקשים לקנות.
<br></br>
כן, ברור לנו שיש גם עניין של טעם אישי בסיפור, אבל האמת היא שאם תסתכלו דרך עדשת המיקרוסקופ תוכלו לראות טיפוס מאוד מסוים שמסתתר מאחורי כל ליקוק של גלידה בים. טוב, לא באמת מסתתר, אבל בהחלט יש קשר בין חטיף הגלידה האהוב עליכם לבין תכונות אופי מסוימות. איזה סוג של קשר? בואו לבדוק בעצמכם.
<br></br><br></br>
<b>אסקימו</b> קרטיב קרח הוא כמובן צונן ומרענן, אבל יש בו גם משהו נוסטלגי וקסום; טעם ישן שישר זורק אותנו לתקופות בעבר בהן כל מה שאפשר היה לקנות בסופר זה קרטיב. ואם על רקע הזיכרון התקופתי הזה אתם עדיין בוחרים לקנות אסקימו, סביר להניח שאתם אנשים שמסתפקים במועט ושקל מאוד לשמח אותם. פשוט כי אתם אופטימיים וחיוביים ומאמינים במוטו של Less is More, ואנחנו לגמרי מפרגנים לכם על הגישה הזו. עכשיו רק נותר לבחור את הטעם המועדף עליכם: דובדבן, לימון, משמש או אננס.
<br></br>
<img src="../../pic/magzin/pic_magzin/11/1.webp" id="img_m">
<br></br><br></br>
<b>מגנום.</b> כשמדברים על חטיף גלידה איכותי ומענג, מגנום זה התגשמות החלום, ואנחנו לא מגזימים. הוא עשוי מרכיבים מפנקים במיוחד, שהופכים אותו למה שהוא: אצולת הגלידה. ואם זו הבחירה הטבעית שלכם, אין מנוס מלהודות בעובדה הברורה לעין: אתם אנשים נועזים, שיודעים לקחת סיכונים, מלאי תשוקה, חיים את הרגע ולא מרגישים צורך להתנצל על כך. האמת? אנחנו קצת מקנאים בכם על כך שאתם לא דופקים חשבון לאף אחד. הלוואי עלינו. כל האושר בא במגוון טעמים,כגון סדרת מגנום דאבל ( בטעמים שוקולד, קראמל, פרי יער ועכשיו חדש- פיסטוק), מגנום שקדים מובחרים או הסדרה הלבנה והשווה- מגנום לבן ומגנום לבן עוגיות)
<br></br>
<img src="../../pic/magzin/pic_magzin/11/2.webp" id="img_m">
<br></br><br></br>
<b>קורנטו.</b> יש משהו מאוד עוצמתי ודומיננטי בקורנטו, המורכב מגביע גלידה קראנצ'י במילוי גלידה בטעמים. משהו שגורם למי שאוכל אותו להתאהב בו כל פעם מחדש. לכן, הוא מתאים במיוחד לאנשים שהם מנהיגים מלידה, כאלה שאין להם בעיה לקחת את המושכות לידיים כשצריך ולשדר לכולם ביטחון ושיש על מי לסמוך. אתם לא חוששים להביע את הדעה שלכם, אפילו אם היא פחות פופולרית, ולסחוף אחריכם את כולם. ולזה, חברים, דרוש אומץ, ואנחנו מצדיעים לכם על כך. עכשיו רק נותר לבחור בטעם האהוב עליכם: קורנטו וניל, שוקולד נוגט, פקאן, עוגיות וניל או קורנטו בננה שוקו צ'יפ וקרונטו פסק זמן. כן, אנחנו יודעים שזו בחירה קשה.
<br></br>
<img src="../../pic/magzin/pic_magzin/11/3.webp" id="img_m">
<br></br><br></br>
<b>סדרת סולרו</b> אנחנו מקווים שזה לא יתפוס אתכם בהפתעה, אבל גלידה ושמירה על המשקל לגמרי הולכים ביחד: שלגוני פירות המשלבים בין פרי וגלידה. ואם זה השלגון האהוב עליכם, אין לנו מנוס מלהגדיר אתכם כאנשים שאוהבים להיות עם יד על הדופק ומרגישים הכי טוב כשדברים נמצאים תחת שליטה. ממש כמו להתפנק עם גלידה שמספר הקלורית שלה מדוד ומאוזן.
<br></br>
<img src="../../pic/magzin/pic_magzin/11/4.webp" id="img_m">
<br></br>
סדרת הסולרו המרעננת כוללת שלגונים ב-3 טעמים מרעננים: תות פרי יער, מנגו פסיפלורה  וקוקוס אננס, וכל שלגון מכיל 55-65 קלוריות בלבד (ללא תחליפי סוכר). זו אחלה אופציה למי שרוצה ליהנות ממשהו מתוק וטעים, אך לא משמין, אבל המלצה שלנו –  תשתחררו לפעמים מהצורך שהכול יהיה בשליטה. זה יעשה לכם רק טוב.
<br></br><br></br>
<b>גלידוניות.</b> אנחנו יודעים שלא באמת אפשר לקנות גלידוניות אצל המוכר בחוף הים, אבל האמת היא שהן מתאימות לאנשים כל כך ספציפיים כך שלא יכולנו להתאפק מלאבחן גם אותם. כלומר אתכם. גלידוניות מתאימות במיוחד לאנשים חברותיים ולארג'ים, כאלה שאוהבים לארח אנשים ומתרגשים לשמח אחרים, ויודעים שלא צריך להפיק משהו גרנדיוזי בשביל להתפנק ולפנק.
<br></br>
עכשיו רק נותר להחליט איזה גלידוניות לשים במקפיא: וניל, שוקו וניל או שוקו בננה, וזהו: אתם מוכנים לכל מי שיקפוץ לבקר בהפתעה. טיפ שלנו: אל תשמרו אותן רק לאורחים, כי כשהם יגיעו תהיו בטוחים שזה יתחסל במהירות שיא.
<br></br>
<img src="../../pic/magzin/pic_magzin/11/5.webp" id="img_m">
<br></br><br></br>
ותרשו לנו להוסיף משפט אחד לסיכום: זה לא באמת חשוב איזה גלידה אתם אוהבים. כי באופן כללי, אנשים של גלידה עושים לנו טוב.
`
,
//12
`
<h1>
גלידות מופחתות קלוריות, אך לא מופחתות טעם – בואו להנות איתנו
</h1>
איזה כיף זה גלידה, נכון? נכון! הבעיה היא שלא תמיד אנחנו מרשים לעצמנו להתפנק עם אחת כזו, בגלל "המחיר הקלורי" שאנחנו סבורים שכלול בכל התענוג הזה. וכך, מרביתנו מסתפקים בלאכול גלידה "פעם ב.." ומשאירים את כל הכיף הזה לאחרים
<br></br>
לאחרונה, התפיסה שגלידות מופחתות קלוריות לא יכולות להיות טעימות השתנתה, וכיום יש לא מעט אפשרויות מפנקות, שמספקות מענה מוצלח לצרכנים שרוצים לשמור על תזונה מאוזנת.
<br></br>
אז למה אתם מחכים? הנה 4 הפתעות מתוקות שיאפשרו לכם לאכול את הגלידה ולהשאיר אותה שלמה. נו, לא בדיוק שלמה אבל הבנתם למה התכוונו. בתאבון!
<br></br>
<h2>
מאגדת שלגוני Goodiz – גלידת שמנת מפנקת ומופחתת קלוריות ושומן.
</h2>
אם עוד לא שמעתם את השם, זה בדיוק הזמן לנסות אותה. Goodiz היא גלידת שמנת טעימה ומופחתת קלוריות, שפותחה בישראל. גלידות מהסוג הזה, המכונות גלידות Wellness הן טרנד טרי ולוהט בעולם, והבשורה הזו הגיעה גם לישראל.
את שלגוני Goodiz תוכלו למצוא ב-2 מאגדות ובטעמים מפנקים: שלושה שוקולדים ושוקולד לבן ותות שדה. כך, תוכלו ליהנות ממנת גלידה מפנקת ועשירה בפחות מ-100 קלוריות – שלגון Goodiz שלושה שוקולדים בכ- 85 קלוריות ושלגון Goodiz שוקולד לבן ותות שדה בכ- 88 קלוריות, בלבד!
<br></br>
<img src="../../pic/magzin/pic_magzin/12/1.webp" id="img_m">
<br></br>
<h2>
גם פרי וגם טעים
</h2>
יש שלגונים שהשם שלהם מספר את כל הסיפור, וזה בדיוק הקטע של סולרו – סדרת שלגוני הפירות של סולרו, שמציעים שילוב מענג בין פרי לגלידה ומגיע ב-3 טעמים שונים ומעולים: סולרו וניל תות שדה (חלבי) פינוק מרענן בכ-105 קלוריות, סולרו וניל פירות טרופיים (חלבי) כ-104 קלוריות, סולרו סורבה קוקוס אננס (פרווה ו- Vegan friendly) כ-88 קלוריות ו-50% פרי. כלל שלגוני סולרו הם ללא גלוטן ומכילים צבעי מאכל טבעיים בלבד.
<br></br>
<img src="../../pic/magzin/pic_magzin/12/2.webp" id="img_m">
<br></br>
<h2>
שלגוני לייט
</h2>
אם אתם מאלה שמעדיפים לאכול את הגרסה הדיאטטית, או שומרים על תזונה מופחתת סוכר, סדרת ה"לייט" של גלידת שטראוס היא הפתרון המושלם עבורכם. מדובר בסדרת שלגונים דלי קלוריות, דלי שומן וללא תוספת סוכר ומהווים אלטרנטיבה מעולה לפינוק מדוד וטעים. כן, אפילו אם אתם סוכרתיים, הודות לכך שכל השלגונים שבסדרה מאושרים על ידי אי"ל (האגודה הישראלית לסוכרת).
<br></br>
שלגוני ה"לייט" מגיעים במאגדות ובמגוון טעמים ומרקמים, בהם שלגון יוגורט אפרסק כ- 35 קלוריות ליחידה, אייס לייט מנגו, לימון, אשכולית אדומה כ-10 קלוריות ליחידה, ולייט מיני סנדוויץ' שוקו וניל כ- 49 קלוריות ליחידה. אם אתם שואלים אותנו, פשוט שימו מאגדת כזו במקפיא, ותוכלו ליהנות מפינוק יומי טעים שיאפשר לכם להשתחרר אבל גם לשמור על תזונה מאוזנת.
<br></br>
<img src="../../pic/magzin/pic_magzin/12/3.webp" id="img_m">
<br></br>
<h2>
קרמבו
</h2>
כן, אנחנו יודעים שזה לא נחשב גלידה והאמת היא שזה בכלל פינוק של חורף, אבל לא יכולנו להתעלם מהקרמבו המוכר והאהוב על כולם. וניל או שוקו, קודם הביסקוויט או כמובן שמתחילים מהקצפת; זה לא באמת חשוב – קחו לכם איזה קרמבו, כשמתחשק לכם משהו מתוק.
אם אתם עדיין מתלבטים וחשבתם שאי אפשר להתפנק עם קרמבו כשרוצים לשמור על תזונה מאוזנת, אז תנו לנו לספר לכם שהקרמבו האהוב עליכם יכול להוות אופציה מנת הפינוק היומית ומסתכם ב"מחיר קלורי" של 100 קלוריות בלבד אבל עם המון טעם.
<br></br>
<img src="../../pic/magzin/pic_magzin/12/4.webp" id="img_m">
`
];

const text_magzin = document.getElementById("text_magzin");
text_magzin.innerHTML += `${magazins[card.Picture]}`;