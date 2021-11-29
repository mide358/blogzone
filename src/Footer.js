import { useStoreState } from 'easy-peasy'

const Footer = () => {
  const today = new Date()
  const postCount = useStoreState((state) => state.postCount)
  return (
    <footer className="Footer">
      <p>Copyright &copy; Iyimide {today.getFullYear()} </p>
      {/* <p>post count :{postCount}</p> */}
    </footer>
  )
}

export default Footer
