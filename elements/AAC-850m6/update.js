function(instance, properties, context) {
    function resolveObjectFit (objectFit) {
        if (objectFit === 1) return 'contain';
        if (objectFit === 2) return 'cover';
        if (objectFit === 3) return 'fill';
        if (objectFit === 4) return 'scale-down';
        return 'none';
    }
    
    var image = properties.image;
    var imgId = "img_" + Math.random().toString(16).substring(2, 12);
    var objectFit = resolveObjectFit(properties.object_fit);
    var grayScale = properties.gray_scale ? properties.gray_scale : 0;

    instance.canvas.innerHTML = "";
    var htmlImg = `<img id="${imgId}" style="width: 100%; height: 100%; object-fit: ${objectFit}; display: block; filter: grayscale(${grayScale}%);" src="${image}"/>`;
    instance.canvas.innerHTML = htmlImg;
}