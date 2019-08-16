const storage = require("../utils/storage");

const addPhoto = async(root, args)=>{

    if(args.photo){
        const { createReadStream } = await args.photo;
        const stream = createReadStream();
        const photo = await storage({stream});

        /*await User.findByIdAndUpdate(args.id, {$set:{image:photo.url}})*/

        return photo.url;
    }
}


module.exports = {
    addPhoto
};