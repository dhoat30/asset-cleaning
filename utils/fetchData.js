export const getPageData = async (slug) => {
    let response = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=${slug}&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await response.json();
    return data
}

export const getSingleResidentialData = async (slug) => {
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/residential-service?slug=${slug}&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}
// //fetch work categories 
// export const getProjectCategories = async () => {
//     let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/work-category`, {
//         next: { revalidate: 60 },
//     });
//     let data = await fetchData.json();
//     return data
// }

// fetch single project 
export const getSingleCommercialData = async (slug) => {
    let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/work?slug=${slug}&acf_format=standard`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}

export const getOptions = async () => {
    let fetchData = await fetch(`${process.env.url}/wp-json/options/all`, {
        next: { revalidate: 60 },
    });
    let data = await fetchData.json();
    return data
}

// export const getAllMenus = async () => {
//     let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/menu?acf_format=standard`, {
//         next: { revalidate: 60 },
//     });
//     let data = await fetchData.json();
//     return data
// }
// // specials page
// export const getSpecials = async () => {
//     let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=specials&acf_format=standard`, {
//         next: { revalidate: 60 },
//     });
//     let data = await fetchData.json();
//     return data
// }
// // chef special page 
// export const getChefSpecials = async () => {
//     let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=chefs-special&acf_format=standard`, {
//         next: { revalidate: 60 },
//     });
//     let data = await fetchData.json();
//     return data
// }

// // guest reviews page 
// export const getGuestReviews = async () => {
//     let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=guest-reviews&acf_format=standard`, {
//         next: { revalidate: 60 },
//     });
//     let data = await fetchData.json();
//     return data
// }

// // get menu by slug 
// export const getMenu = async (slug) => {
//     // get tag id first 
//     let fetchTagID = await fetch(`${process.env.url}/wp-json/wp/v2/menu-tag?slug=${slug}`, {
//         next: { revalidate: 60 },
//     });
//     let tagData = await fetchTagID.json();

//     if (!tagData.length) {
//         return
//     }
//     let tagID = await tagData[0].id

//     // now fetch the menu with specific tag id 
//     let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/menu?menu-tag=${tagID}&acf_format=standard`, {
//         next: { revalidate: 60 },
//     });
//     let data = await fetchData.json();
//     return data
// }


// // get faq page 
// export const getFaq = async () => {
//     let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=faqs&acf_format=standard`, {
//         next: { revalidate: 60 },
//     });
//     let data = await fetchData.json();
//     return data
// }

// // get host an event page 
// export const getEvents = async () => {
//     let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=host-an-event&acf_format=standard`, {
//         next: { revalidate: 60 },
//     });
//     let data = await fetchData.json();
//     return data
// }


// // get gallery page 
// export const getGallery = async () => {
//     let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=gallery&acf_format=standard`, {
//         next: { revalidate: 60 },
//     });
//     let data = await fetchData.json();
//     return data
// }


// // get gallery page 
// export const getPage = async (slug) => {
//     let fetchData = await fetch(`${process.env.url}/wp-json/wp/v2/pages?slug=${slug}&acf_format=standard`, {
//         next: { revalidate: 60 },
//     });
//     let data = await fetchData.json();
//     return data
// }

