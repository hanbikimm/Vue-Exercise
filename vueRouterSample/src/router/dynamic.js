
const routes = [
{
    path:'/dynamic',
    component : () =>import('@/views/Dynamic.vue'),
    children:[
        {
            path: "/optional-group/(foo/)?bar",
            component: () =>import('@/components/Dynamic/OptionalGroup.vue'),
        },
        {
            path: "/optional-params/:foo?",
            component: () =>import('@/components/Dynamic/OptionalParams.vue'),
        },
        {
            path : '/asterisk/*'  ,
            component: () =>import('@/components/Dynamic/Asterisk.vue'),
        },
        {
            path :'/params-with-regex/:id(\\d+)' ,
            component: () =>import('@/components/Dynamic/ParamsRegex.vue'),
        },

    ]    
    },
 
];

export default routes;
