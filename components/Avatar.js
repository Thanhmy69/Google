function Avatar({url, className}){
    return <img 
    loading="lazy"
    className={`rounded-full h-10 
    cursor-pointer transition duration-150
    transorm hover:scale-110 ${className}`}
    src={url}
    alt="Profile picture"
        />
}

export default Avatar