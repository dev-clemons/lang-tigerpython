import { LRLanguage, LanguageSupport } from '@codemirror/language';
import * as _codemirror_autocomplete from '@codemirror/autocomplete';
import { CompletionContext, CompletionResult } from '@codemirror/autocomplete';

declare function localCompletionSource(context: CompletionContext): CompletionResult | null;
declare const globalCompletion: _codemirror_autocomplete.CompletionSource;

declare const tigerPythonLanguage: LRLanguage;
declare function tigerPython(): LanguageSupport;

export { globalCompletion, localCompletionSource, tigerPython, tigerPythonLanguage };
