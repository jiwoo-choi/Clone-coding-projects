<template>
  <div id="app">
    <TopNavigation></TopNavigation>
	<MenuNavigation></MenuNavigation>
	<Card></Card>
  </div>
</template>

<script>
import TopNavigation from './components/TopNavigation.vue';
import MenuNavigation from './components/Menu/MenuNavigation.vue'
import Card from './components/Card/Card.vue'
export default {
  name: 'App',
  components: {
	TopNavigation,
	MenuNavigation,
	Card
  }
}
</script>

<style>


html {
	font-family: 'Apple SD Gothic Neo', Roboto, 'Noto Sans KR', NanumGothic, 'Malgun Gothic', sans-serif;
	line-height: 1.2;
	word-wrap: break-word;
}
body {
	-webkit-font-smoothing: antialiased;
	background: "#F8F9FA";
}
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
}
article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section {
	display: block;
}
div, span, article, section, header, footer, aside, p, ul, li, fieldset, legend, label, a, nav, form {
	box-sizing: border-box;
}
ol, ul, li {
	list-style: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
img {
	max-width: 100%;
	height: auto;
	border: 0;
}
button {
	border: 0;
	background: transparent;
	cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.card-title {
	font-size : 1.1rem;
}
.card-title {
	font-weight : bold;
}

.bold {
	font-weight:bold;
}

.black {
	color: rgb(33, 37, 41);
}

.dark-grey {
	color : rgb(73, 80, 87);
}

.grey {
	color : rgb(134, 142, 150);
}

.card-desc {
	font-size:0.9rem;
}
.card-desc-sm {
	font-size:0.8rem;
}



</style>
