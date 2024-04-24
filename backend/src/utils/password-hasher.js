import bcrypt from 'bcrypt';


const generateHashFromPassword = async (password) => {
    const saltRounds = 10;

    const salt = await bcrypt.genSalt(saltRounds);
        
    const hash = await bcrypt.hash(password, salt);
    
    return hash;
}

const comparePasswordWithHash = async (password, hash) => {
    return bcrypt.compare(password, hash);
}

export { generateHashFromPassword, comparePasswordWithHash };