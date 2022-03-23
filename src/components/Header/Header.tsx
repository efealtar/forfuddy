import { Box } from "@mui/system";
const Header = () => {
	return (
		<Box
			data-testid='Header'
			display='flex'
			alignItems='center'
			justifyContent='center'
			style={{ fontSize: "25px", marginTop: "10px", marginBottom: "10px" }}
		>
			Fuddy
		</Box>
	);
};

export default Header;
