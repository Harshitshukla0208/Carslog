import {
    Box,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
} from "@chakra-ui/react";
import { ChevronDownIcon } from '@chakra-ui/icons';
import { LANGUAGE_VERSIONS } from '../langsupport';

const languages = Object.entries(LANGUAGE_VERSIONS);

const LanguageSelector = ({language, onSelect}) => {
    return (
        <Box>
            <Text mb={2} fontSize='lg'>Language: </Text>
            <Menu>
                <MenuButton as={Button} rightIcon={<ChevronDownIcon />} colorScheme="blue">
                    {language}
                </MenuButton>
                <MenuList backgroundColor="#383b40">
                    {languages.map(([language, version]) => {
                        return (
                            <MenuItem backgroundColor="#383b40" key={language} onClick={() => onSelect(language)}>
                                <Text color="white">
                                    {language}&nbsp;
                                </Text>
                            </MenuItem>
                        );
                    })}
                </MenuList>
            </Menu>
        </Box>
    );
};

export default LanguageSelector;
