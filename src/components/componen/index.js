import React from "react";
import {Home,
    OndemandVideo,
    LiveTv,
    SportsEsports,
    School,
    FitnessCenter,
    TheaterComedy,
    GraphicEq,
    Checkroom,
    DeveloperMode,
    FaceRetouchingNatural,
    MusicNote,
} from "@mui/icons-material";
import purple from "@mui/material/colors/purple";

export const logo ='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///89PT1lZWU/Pz86Ojo2Njb7+/tKSkouLi4zMzMtLS0qKiolJSX09PSnp6f5+fna2tqbm5uNjY21tbVERERmZmbp6emUlJRra2t/f3/v7+/MzMxISEje3t67u7vGxsZcXFx2dnZWVlaCgoJQUFCXl5fKysrU1NStra0eHh5xcXG8pamzAAAHyklEQVR4nO2dW3uqOhCGwRxMCIqgpWo94KHV1f//A3ewq8sEURKBJt3PvBftjQE+kwwzk0kMAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAHoD/WyBl0PV7sZ8iQ4jCeuH5iO5bpSjCCjSGcRcN06fqxjaByqCUpjnBoC2YkTX7DSKXB5Mjs9ZUSkTiuXT++CZuYyKd9QiHCIYk3rh+/mal4qgO/EVPfB+pWPNV/f5FGR2xdS3hMzuRoa6FQtma5axEPGZDn5X134+BikD1lG7fowG+8tjbHVlbmL/jocxd2IFDaU3+Nza71LLzAF66F3GOEMO5gHkrnJnEt5Q4T0YE8CRJ3Ao0fnZ8JvSGYsm4Uhkw6NjXX/zmW00VxHN7SxQgtwSGqufqxWEx/Jr7KdyKqD/06EngRWQePol3/Dk/y/od0KcVOd0j+vPY8WkdFV3PNHnTxeFnR61AdHbt547WBH0c9KmzvWHcAG/Q3UNPn0hNdI9K+BOa8E5elPT2FkDTIOPKiD0Oe9aIwoKzVKw/9+ysv03yh6mhRhg/GUT8z8a1NbITDS+KXs4hxQhrdA8xZBa60QOKtFx815S0ESn8EHz+zdDwep9nnEUfaI1chw/Q81kmH/26PQ/7ei8Lnor9ycHExO2zWakhE15tsFt8TSQY1t6ef384UCsmuB31B8PJcJhuLVVofDa3fh4LUmWdWk/qmwfKaicXzfhQ+0YdS38vH1wPWQT9exO1V70XAV0uOXzxRiIgoTg1XPb3EuGo47yic9a3Q3mUTQ5Oc0scw0k3rvT5UFNZN1PbYKsSRSaRDk4C+iorC+nZeKcQIk9mH8aXfEFGSWPf6cOWRQvwVx5m/s5aDSPFZ7vSh8gnnCuUItcx50kWktK4PcrlHfYiEvW+cXXORPK3r/nPkkUJ7gbSU+K0AR2k+qpCP+dX7dq6QLeqnYD7Zbqab7aRuEMoGu785IBRiFlcRPLyGJK4V8ur9y2zuaHuYSfdbRgmR4KvDdlTj5wweeeMqjhXi2W0frTMsrllIjLlAWTVQT4J8ZhiBOlYYv1Vb5gvBq88uRWb6NyF7+sOwzMGtQnZjZcZ/6iNLHk+rQzUzS8c6VUhmlWb5gN3JWiAsdpXcJ50ZdaJLhTiqONsT6ZDdS8tgzI7abKTBJqr/qD8Kq+H55HGFGyLhunoXg150qVCo8SAN1o0pVrLSberJJN/lTiEiL4rpoMFy1iBQhu280COJgd99GOuz0CgtwA5BoljUjUEnulOIQ63F2cxsVL4Wg7e+O4XsVW2wNFxLxStlnNLgtTkv605hdE0bSg/F8PUtzdNYvc+p2bFxplAdpDTI2U0S7V47pL34w8Zx6kwhOagK35nxWhw7qzdaNA5TZwrZVP38yjhHjshebThtNFDOFArVPzkJ8+VUFKkt140tXSnESA2HrJaqtGG69HYeYm2szW0SyPpi0t5XheRT/bhpRuLrkbWYq/HLcaZQMaXB0q4gOlad04WvCrnq0axjq8KNWI0wsqYp7EyhWudysis2jdVF1LTJGfJDoV11kRZX/g6Fk9hKod6H3o5SdR7mdrUpsfrK93YeSlt6jWQTS4Wq7+2tLSVahYRdhRhRm3r7PpQ+jZKN2Nl4bfqX461PE4aqX3q2qSbmagzsr1+qxxa5VWyhmtLmfRuexIeNY0154qHa0OP4UN2wRIOp+XZSpiVqFo0ZLC/yNAEdma2ylO3IdQJLW+VzNjHSarzGRunSsJqEPDVX6rrrQ82rCahhpkbtwqD0aBpNlMOsPtYWPA2rioVmoKjPOW8UCn0Pr1FOmM+1rc0mK4gOFZYbsZUmtGgwi+U5Ciu9PKzwe+0pFHqZwnL4uFFZ4K4vkRqNbKer3JV756uHrRAmE3XFkQbFM3f5UYWVmRgs9w+OWcB8pvVguY5vYn+d1mLgUFvSpUFyiO9aRzGvFBdRswU5twpvt+xscH3ulPNz9aMHs5DLdU3UTW3wMuNlTQ2+2M6vPzjkbHGzQWv7K2qiQoxut5blKY55+LUZSArEPGJZdVMFDXLT/fyuaxPJvq5O++214EJEUSQEK7KPmvLM5PhLahPlBLuzaSdZv20327d1/TZX+mmc93CuMIwOzZe74WCeQ3avMBT1Emlw/+iHhcUJaB4oDNnc7vSO0dxmncMHhSEvbDbr5oV5WYMvCkOCzQ/S2WIe2izG+aEwxPGhrlz9ltHCbhXHG4VypCKTQ602M2a7C74nhfb7DzEWxU1Ze4WPQkh9lhK9UVg+S1xsknKs1o7WZLN/6hDCnnbJzp/bjU8Yz051XszolGHx3Bb/nhRaLSZdQeX+kdnuPFFVjibn3UrwS5DxBD3t5W61H58wwY7zRfaavmaL+VF64C0O8sGsdnNba1qdqVA+1+VMBcY5L7eotzpD5HZbTjfwVudalrnGr//I5FyMR2Dey7kYZc3v//xsE2/Op8H9HXE6dncMlko0bn7UZ5nzbk5GbAFCfN7jgWajvfteLM/66k0iDZKBDANKW+/C5FxuK4oeBV5EppFVaWzHkKi3c76urA+k3PPqABKR2yRy95TbsjdZYfyzB52xKrLN7/htgd+Cv8c1AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAtOM/WZF4fos4yiwAAAAASUVORK5CYII='

export const colors ={
    fontColor:'#7091e6',
    bgColor:'#3d52a6',
    color:purple

}
export const categories = [
    {name: 'New', icon: <Home/>},
    {name: 'Movie', icon: <OndemandVideo/>},
    {name: 'Live', icon: <LiveTv/>},
    {name: 'Gaming', icon: <SportsEsports/>},
    {name: 'Education', icon: <School/>},
    {name: 'Sport', icon: <FitnessCenter/>},
    {name: 'Comedy', icon: <TheaterComedy/>},
    {name: 'Podcast', icon: <GraphicEq/>},
    {name: 'Fashion', icon: <Checkroom/>},
    {name: 'Crypto', icon: <DeveloperMode/>},
    {name: 'Gym', icon: <FitnessCenter/>},
    {name: 'Beauty', icon: <FaceRetouchingNatural/>},
    {name: 'Music', icon: <MusicNote/>},
]
