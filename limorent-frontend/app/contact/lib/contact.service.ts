import {Question, YouTrackForm} from "@/app/contact/lib/form.types";

export function ConvertQuestionToString(question: Question) {
    return `Получено новое сообщение с формы связи на сайте BDV.PW: <br>
            Имя отправителя: ${question.name},
            E-mail для связи: ${question.email},
            Детали сообщения: ${question.details},
            Название компании: ${question.companyName},<br>
            Номер телефона: **${question.phoneNumber}**
            Предпочитаемый способ связи: **${question.contactBy}**<br>
            Сообщение сгенерировано автоматически @ BDV.pw
            `;
}

export async function SendForm(form: YouTrackForm) {
    const formData = new FormData();
    formData.append("feedbackForm", JSON.stringify(form));
    await fetch("https://bdv.youtrack.cloud/api/feedbackForms/9d1570b1-8c4b-4be5-84c7-132e0eb3d483/submit?fields=idReadable,project(id,isDemo)", {
        method: "POST",
        body: formData
    });
}