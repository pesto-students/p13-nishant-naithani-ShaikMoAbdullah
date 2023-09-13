const loader = document.getElementById("loader");
loader.style.display = "none";

const imageGeneratedSection = document.getElementById("result");
imageGeneratedSection.style.display = "none";

const API_Endpoint = "https://api.openai.com/v1/Images/generations";

const API_Key = sk - ofmHGQF1DwDXPvrOJS9lT3BlbkFJBjAibGwOmxxyHo6yINkn;

async function getImage(inputText) {
  try {
    const requestBody = {
      n: 1,
      prompt: inputText,
      size: "1024x1024",
    };

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_Key}`,
      },
      body: JSON.stringify(requestBody),
    };

    const response = await fetch(API_Endpoint, requestOptions);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", async () => {
  const inputText = document.getElementById("inputText");
  loader.style.display = "block";
  const data = await getImage(inputText);
  loader.style.display = "none";
  imageGeneratedSection.s

});
