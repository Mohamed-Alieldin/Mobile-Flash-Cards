export let initialData = {
	"xs1h8oq461x21rvyzc2hd": {
		"id": "xs1h8oq461x21rvyzc2hd",
		"title": "Math For Beginners",
		"questions": [{
				"question": "Find 1 + 1.",
				"answer": "2"
			},
			{
				"question": "Find 2 - 1.",
				"answer": "1"
			},
			{
				"question": "Find 3*2.",
				"answer": "6"
			}
		]
	},
	"rdpkm8u6eqe09g6pm7oi1tu": {
		"id": "rdpkm8u6eqe09g6pm7oi1tu",
		"title": "English For Beginners",
		"questions": [{
				"question": "What letter comes after b?",
				"answer": "c"
			},
			{
				"question": "What letter comes before e?",
				"answer": "d"
			}
		]
	}
}



export function _getDecks () {
  return new Promise((res, rej) => {
    setTimeout(() => res({...initialData}), 1000)
  })
}