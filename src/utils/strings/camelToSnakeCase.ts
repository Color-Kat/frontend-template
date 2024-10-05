/**
 * Converts a camelCase string to snake_case.
 *
 * @param {string} str - The camelCase string to convert.
 * @returns {string} The converted snake_case string.
 */
export function camelToSnakeCase(str: string): string {
    return str.replace(/([a-z])([A-Z])/g, '$1_$2').toLowerCase();
}

// Example Usage
// console.log(camelToSnakeCase('camelCaseString')); // Output: "camel_case_string"
