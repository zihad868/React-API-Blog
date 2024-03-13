import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center mt-2 max-w-7xl mx-auto'>
            <h1 className='text-4xl'>Knowledge Cafe</h1>
            <img src={profile} alt="Profile Image" />
        </div>
    );
};

export default Header;