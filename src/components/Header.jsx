const Header =({subtitle, title}) => {
    return (
        <div className = "flex flex-col lg:w-[1000px] justify-center items-center mx-auto mb-[50px] text-center">
            <div className="text-gray-300 uppercase font-semibold text-base">
                {subtitle}
            </div>
            <div className="text-purple-500 font-mono text-[40px]">
                {title}
            </div>
        </div>       
    )
}

export default Header;