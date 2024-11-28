//const CHATGPT_KEY = "";
const apikey = process.env.OPENAI_API_KEY;
const consultaChat = async () => {
    let question = document.getElementById('question').value;
    document.getElementById('pergunta').innerHTML = question;
    await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${CHATGPT_KEY}`
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo-1106",
            messages: [{ role: "user", content: question }],
            max_tokens: 1024,
            temperature: 0.7
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.choices && data.choices.length > 0) {
                document.getElementById('resposta').innerHTML = data.choices[0].message.content
            } else {
                document.getElementById('resposta').innerHTML = "Nenhuma resposta encontrada";
            }
        })
        .catch((error) => {
            document.getElementById('resposta').innerHTML = "reformule a pergunta";
        });
}