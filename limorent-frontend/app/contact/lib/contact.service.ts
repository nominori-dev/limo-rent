export async function SendForm(form: any) {
    const formData = new FormData();
    formData.append("feedbackForm", JSON.stringify(form));
    await fetch("https://bdv.youtrack.cloud/api/feedbackForms/9d1570b1-8c4b-4be5-84c7-132e0eb3d483/submit?fields=idReadable,project(id,isDemo)", {
        method: "POST",
        body: formData
    });
}