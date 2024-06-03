const { Schema, model } = require('mongoose');
const { createHmac, randomBytes } = require('crypto');

const userSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    salt: {
        type: String
    },
    password: {
        type: String,
        required: true
    },
    profileImageURL: {
        type: String,
        default: 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png'
    },
    role: {
        type: String,
        enum: ["USER", "ADMIN"]
    }
}, { timestamps: true });

userSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return next();

    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac('sha256', salt)
        .update(user.password)
        .digest("hex");

    this.salt = salt;
    this.password = hashedPassword;

    next();
});

userSchema.static("matchPassword", async function (email, password) {
    const user = await this.findOne({ email: email });

    if (!user) throw new Error('User Not Found !!');

    const salt = user.salt;
    const hashedPassword = user.password;

    const userProvidedHash = createHmac('sha256', salt)
        .update(password)
        .digest("hex");

    if (hashedPassword !== userProvidedHash) throw new Error('Wrong Password !!');

    return {
        ...user.toObject(), password: undefined, salt: undefined
    }
});

const USER = model('User', userSchema);

module.exports = USER;
