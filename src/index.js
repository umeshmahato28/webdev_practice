
var React = require("react");
var ReactDom = require("react-dom");



const img1="https://picsum.photos/200/300";
const links="https://www.amazon.in";

const fname="rahu raj";
const heading={
      color:"orange",
      textTransform:"capitalize",
      textAlign:"center",
      
      
}
ReactDom.render(
      <>
<h1  style={heading}
      contentEditable="true" className="heading">my name is {fname}</h1>
<img src= {img1} alt = "img not found"></img>
<a href={links} target="">click me</a>
</>,





document.getElementById("root"));
