const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			list: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
			
			
				fetch(
					"https://assets.breatheco.de/apis/fake/todos/user/astronaut", {
						method: "GET",
						redirect: "follow",
					}
				
				)
					.then((response) =>  response.json())
					.then((result) => setStore({list: result}))
					.catch((error) => console.log("error", error));
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
