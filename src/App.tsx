import { Route, Switch } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutPage from "@/pages/AboutPage";
import WorkPage from "@/pages/WorkPage";
import WritingPage from "@/pages/WritingPage";
import ContactPage from "@/pages/ContactPage";

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-paper text-ink">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={AboutPage} />
          <Route path="/work" component={WorkPage} />
          <Route path="/writing" component={WritingPage} />
          <Route path="/contact" component={ContactPage} />
          <Route>
            <AboutPage />
          </Route>
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;
