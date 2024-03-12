import profile from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between items-center p-5 mt-2'>
            <h1 className='text-4xl'>Knowledge Cafe</h1>
            <img src={profile} alt="Profile Image" />
        </div>
    );
};

export default Header;