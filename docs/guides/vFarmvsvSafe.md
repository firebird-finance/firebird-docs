---
id: vFarmvsvSafe
title: vFarm vs. vSafe
sidebar_label: vFarmvsvSafe
---

**OVERVIEW**  

In order to maximize your investment, it is important for you to understand the difference between Value DeFi's vFarms and a vSafes.  While they both yield generous rewards, they both hold unique and interesting features that will be discussed in this guide; enjoy!

![Separator](../img/seperator.png)

**What is a vFarm?**  

*Notice: We used IRON-BUSD vFarm and vSafe in this example, and all references to block times and rewards vesting are related specifically to it. Each vFarm has its own unique setup.*

A vFarm is a highly sophisticated liquidity mining pool that allows the pool creator to set up various parameters, including reward multipliers and vesting, to manage and customize the emission of their tokens and meet their needs.

Let's take the screenshot below as an example:

![1](https://user-images.githubusercontent.com/78454114/112706767-78dc8300-8e74-11eb-9edd-5738691ae443.png)  

The project that created the vFarm (the owner) gets to define the block number that will be used by the pool to issue the vesting. By clicking the block number on the user-interface (here, 6675734), your browser will take you to BscScan.com block countdown page where you can see the approximate time left until that block will be reached.  

![2](https://user-images.githubusercontent.com/78454114/112706804-ad503f00-8e74-11eb-8e8d-7ecd5aab163f.png)  

It is also block number where 70% of rewards will start to get linearly released.  

The second block will show when 70% of rewards stop being released. 

![3](https://user-images.githubusercontent.com/78454114/112706808-ba6d2e00-8e74-11eb-98cd-2b53b355d21b.png)  

In this specific case it means that you are receiving 30% of rewards instantly for the first 30 days, and you are also accruing your rewards for the next 90 days when those rewards are released. During those 90 days you do not have to remain in vFarm to receive those rewards, they will be linearly released and you are able to claim them partially every block or claim full amount after vesting period ends.  

So in a graphic way it would look like this:  

![4](https://user-images.githubusercontent.com/78454114/112706813-c5c05980-8e74-11eb-9db7-ab6a43e8d974.png)  

![Separator](../img/seperator.png)

**What is a vSafe?**  

vSafe is a cutting-edge yield aggregator that uses multiple strategies to maximise profits for its users while giving auto-compounding benefits as well. In simpler terms, a vSafe will search for the best farming targets, deposit your investment, trade farming rewards for deposited tokens, and re-invest automatically.

What happens if a strategy has a farming target that has rewards vested?

In order for vSafe to work properly, users send their capital to vSafe smart contract so that it has the full liberty to use it, which makes reinvesting, changing strategy and hourly auto-compounding possible. Users give their vested reward rights to vSafe to freely distribute and are not tied to user addresses like vFarm, but to vSafe addresses. As rewards get released vSafe will regularly call harvest function, sell rewards and distribute them to users who are in vSafe at that moment, whether or not they “earned” those rewards by being early vSafe depositors. This means that locked rewards are not earmarked to each depositor. All past locked rewards are distributed proportionally to current vSafe participants during the linear vesting period.

![5](https://user-images.githubusercontent.com/78454114/112706830-e4beeb80-8e74-11eb-88de-aa3154b08e02.png)

vSafe calculates its APY/daily APY using data from its farming target, so despite being correct as yearly calculation, daily APY is in fact 3/10ths of what it displays due to 30% of rewards being released instantly while 70% being released over a period of 90 days.
 
To check if vSafe is utilizing vested strategy you can click on the Running strategy arrow icon at bottom of the screen that will lead you to vFarm it uses as target. 
  
![6](https://user-images.githubusercontent.com/78454114/112706844-ed172680-8e74-11eb-97a1-99a854851104.png)

There you will see reward vesting details.   

It is also important to know that due to the specific mechanism of vSafe, you will need to remain in vSafe for the entire rewards release duration to receive maximum benefits (in this case full 120 days).  

![Separator](../img/seperator.png)

**GETTING STARTED**  
- BSC: https://bsc.valuedefi.io/#/vsafe
- Ethereum: https://valuedefi.io/value-vaults  
