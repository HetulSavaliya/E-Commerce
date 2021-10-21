const initialState  = [
    {
        name:"Williamson",
        designation:"Web Developer",
        image:"images/img-1.jpg",
        about:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate."
    },
    {
        name:"krishna",
        designation:"App Developer",
        image:"images/img-2.jpg",
        about:"krishna ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate."
    },
    {
        name:"mrugesh",
        designation:"React Developer",
        image:"images/img-3.jpg",
        about:"mrugesh ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate."
    },
    {
        name:"Jonson",
        designation:"Mobile Developer",
        image:"images/img-1.jpg",
        about:"mrugesh ipsum dolor sit amet, consectetur adipiscing elit. Praesent urna diam, maximus ut ullamcorper quis, placerat id eros. Duis semper justo sed condimentum rutrum. Nunc tristique purus turpis. Maecenas vulputate."
    },
    
];

export const OurTeamReducer =  (state = initialState,action)=>{
    switch(action.type){
        default:
            return state;
    }
}