import React, { useState,useRef } from 'react'
import { Box } from '@chakra-ui/react'
import {Editor} from '@monaco-editor/react'
import LanguageSelector from './LanguageSelector';
import { CODE_SNIPPETS } from '../langsupport';

const CodeEditor = () => {

    const editorRef = useRef();
    const [value, setvalue] = useState("");
    const [language, setlanguage] = useState("Javascript");
    
    const onMount = (editor) => {
        editorRef.current = editor;
        editor.focus();
    };

    const onSelect = (language) => {
        setlanguage(language);
        setvalue(CODE_SNIPPETS[language])
    }

    return (
        <Box>
            <LanguageSelector language={language} onSelect={onSelect} />
            <Editor
                height="75vh" 
                theme='vs-dark'
                language={language}
                defaultValue="// some comment" 
                onMount={onMount}
                value={value}
                onChange={(value) => setvalue(value)}
            />
        </Box>
    )
}

export default CodeEditor
