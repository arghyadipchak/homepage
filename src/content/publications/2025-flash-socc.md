---
title: 'FLASH: Fast Linked AF_XDP Sockets for High Performance Network Function Chains'
date: 2025-11-19
category: conferences
venue: ACM Symposium on Cloud Computing (SoCC)
citation: 'D. Das, K. P. Baua, A. Kansara, A. Chakraborty, D. Kurukunda, M. Vutukuru, P. Kulkarni. (2025). "FLASH: Fast Linked AF_XDP Sockets for High Performance Network Function Chains." _ACM SoCC 2025_'
paper_url: https://cdn.arghyac.com/papers/flash-socc2025.pdf
bibtex: |
  @inproceedings{das2025flash,
    author    = {Das, Debojeet and Baua, Kevin Prafull and Kansara, Aditya and Chakraborty, Arghyadip and Kurukunda, Dheeraj and Vutukuru, Mythili and Kulkarni, Purushottam},
    title     = {{FLASH}: Fast Linked {AF\_XDP} Sockets for High Performance Network Function Chains},
    booktitle = {Proceedings of the 2025 ACM Symposium on Cloud Computing (SoCC '25)},
    pages     = {571--584},
    year      = {2025},
    doi       = {10.1145/3772052.3772258},
  }
---

## Abstract

Recent advances in the Linux kernel, such as eXpress Data Path (XDP) and AF_XDP sockets, enable high-speed packet processing for software NFs while preserving access to kernel features. However, the default AF_XDP implementation in the Linux kernel does not permit easy and performant NF chaining, e.g., zero-copy transfer of packets across NFs co-located on the same host. While prior work has proposed solutions for optimized NF chaining in the context of kernel bypass frameworks like DPDK that operate entirely in userspace, such solutions do not extend easily to AF_XDP, because the AF_XDP datapath is fragmented across the kernel driver and userspace. This paper introduces **FLASH**, a low-overhead inkernel chaining mechanism for AF_XDP sockets. FLASH enables zero-copy packet transfers for FLASH-native NFs, and single-copy packet transfers for legacy AF_XDP NFs. Further, via integration with K8s, FLASH supports the deployment of unprivileged containerized NFs on cloud platforms. Our work contributes several novel modifications to the AF_XDP datapath in the kernel to implement optimized NF chaining, and provides userspace libraries/APIs to easily build NFs that leverage FLASH. Our evaluations show that FLASH matches the performance of userspace DPDK-based NF chaining frameworks, while outperforming the best available AF_XDP-based alternatives by up to 2.5$\times$ in throughput, and achieving the lowest latency among all NF chaining frameworks.
