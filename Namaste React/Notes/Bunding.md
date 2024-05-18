- chunking
- dynamic bundling
- code spliting
- on demand Loading
- Dynamic Import

@ These will help to distribute our app in small chunks which has specific page to do some task



# - lazy loading
- import syntax

      const Grocery = lazy(() => import("./components/Grocery"));

        <Route
            path="/grocery"
            element={
            <Suspense fallback={<h1>Loading...</h1>}>
                {" "}
                <Grocery />{" "}
            </Suspense>
            }
        ></Route>

- this will create a sperate bunding file to perform specific task

- if we donot use this, our whole file in a single bundle and perfrom slow at large project.
