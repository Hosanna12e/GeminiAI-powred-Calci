import { GoogleGenerativeAI } from "@google/generative-ai";

const GenAI = new GoogleGenerativeAI("AIzaSyA9PjZvENC2Wk202aN_89c1-UbdmyQJ8uU")

console.log("Instance Created....",GenAI)

const Calculate = async () => {

  const model = GenAI.getGenerativeModel({model: "gemini-pro"})

  const prompt = document.getElementById("myInput").value

  const result = await model.generateContent(prompt)
  const text = result.response.text()

  const res = document.getElementById("res")
  res.innerHTML = text

  console.log("Text Generated");
}

window.generateAnswer = () => {
  Calculate()
}