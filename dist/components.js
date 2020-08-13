import { openBlock, createBlock, toDisplayString, withScopeId } from 'vue';

var script = {
		name: "MyComponent",
		props: {
			myProp: {
				type: String,
				default: ""
			}
		}
	};

var _withId = /*#__PURE__*/withScopeId("data-v-e855639e");

var render = /*#__PURE__*/_withId(function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", null, " Hello World from my component " + toDisplayString(_ctx.myProp), 1 /* TEXT */))
});

script.render = render;
script.__scopeId = "data-v-e855639e";
script.__file = "src/components/MyComponent.vue";

export default script;
