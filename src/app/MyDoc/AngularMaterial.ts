/**
 * Why Angular Material?
 * ---------------------
 *   - unit testing
 *   - light
 *   - 
 */

/**
 * Installation
 * ------------
 *  > ng add @angular/material
 */

/**
 * package.json vs. package-lock.json
 * ----------------------------------
 * - package.json --> a versioning file used to install multiple packages in your project.
 * 
 * - As you initialize your node app, you will see 3 files 
 *   [node_nodules, package.json, package.lock.json]
 * 
 *  you can initialize the node project by running > npm init
 * 
 *  - package.json file contains metadata about the project and also the functional dependencies that is required
 *  - package.lock.json is created for "locking the dependency with the installed version"
 *     it will install the exact latest version of that package
 *     and save it in package.json.
 *  
 *  - WITHOUT package.lock.json
 *    there might be some differences in installed versions in different environments
 *    to OVERCOME this problem, package.lock.json is created to 
 *     ** have the same results in every environment **
 *  
 *  - it should be in source control with the package.json file
 *    because if any other user will clone the project and install dependencies 
 *    then it will install the exact same dependencies as in package.lock.json 
 *    to avoid differences.
 * 
 *  -    
 */