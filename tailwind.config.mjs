/** @type {import('tailwindcss').Config} */
module.exports = {

	darkMode: ["class"],
  	content: [

    	"./pages/**/*.{js,jsx}",
    	"./components/**/*.{js,jsx}",
    	"./app/**/*.{js,jsx}",
    	"./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",

  	],
  	prefix: "",
  	theme: {

		container: {

			center: true,
      		padding: "2rem",
      		screens: {
        		"2xl": "1400px",
      		},

		},
    	extend: {

			keyframes: {

				"loop-scroll": {
                    "from": { transform: "translateX(0)" },
                    "to": { transform: "translateX(-100%)" },
                },
				"reverse-loop-scroll": {
                    "from": { transform: "translateX(-100%)" },
                    "to": { transform: "translateX(0)" },
                },
				"accordion-down": {

					from: { height: "0" },
          			to: { height: "var(--radix-accordion-content-height)" },

				},
        		"accordion-up": {

					from: { height: "var(--radix-accordion-content-height)" },
          			to: { height: "0" },

				},
      		},
      		animation: {

				"loop-scroll": "loop-scroll 25s linear infinite",
				"reverse-loop-scroll": "reverse-loop-scroll 25s linear infinite",
				"accordion-down": "accordion-down 0.2s ease-out",
        		"accordion-up": "accordion-up 0.2s ease-out",

			},
			colors: {

				"#FFFF00":"light-yellow"
			},
			fontFamily: {

				"poppins": [ "poppins", "sans-serif" ],
				"unbounded": [ "unbounded", "sans-serif" ],

			}

		}

	},
  	plugins: [require("tailwindcss-animate")],

}
