
const getCroppedImageUrl = (url: string) =>{
    const target = 'media/';
    //const index = url.indexOf(target) + target.length;
    return url.replace(target, target + 'crop/600/400/');

}

export default getCroppedImageUrl;