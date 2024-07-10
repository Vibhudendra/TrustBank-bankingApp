import RightSidebar from "@/components/RightSidebar";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import HeaderBox from "@/components/ui/HeaderBox";

const Home = () => {
  const loggedIn = { firstName: "Kaladin" , lastName: "Storm", email: "KaladinStorm@contact.wind"};
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guestname"}
            subtext="Access and manage your account and transactions efficiently."
          />
          <TotalBalanceBox 
          accounts={[]} 
          totalBanks={1}
          totalCurrentBalance={1050}
          />
        </header>
        RECENT TRANSACTIONS
      </div>
      <RightSidebar 
      user = {loggedIn}
      transactions= {[]}
      banks = {[{currentBalance: 1230},{currentBalance: 12230}]}
      />
    </section>
  );
};

export default Home;
