
import noImage from '../assets/no-image-placeholder-6f3882e0.webp'

const getCroppedImageUrl = (url: string) =>{

    if (!url) return noImage;
    const target = 'media/';
    //const index = url.indexOf(target) + target.length;
    return url.replace(target, target + 'crop/600/400/');

}

export default getCroppedImageUrl;