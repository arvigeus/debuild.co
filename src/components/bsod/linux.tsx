export const BSOD = (): JSX.Element => (
  <>
    <div className="bsod">
      <p>
        [&nbsp;&nbsp;&nbsp;1561.519943] [Hardware Error]: CPU 4: Machine Check
        Exception: 5 Bank 3: be00000000800400
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519946] [Hardware Error]: RIP !INEXACT!
        33:&lt;00007fe99ae93e54&gt; <br />
        [&nbsp;&nbsp;&nbsp;1561.519948] [Hardware Error]: TSC 539b174dead ADDR
        3fe98d264ebd MISC 1 <br />
        [&nbsp;&nbsp;&nbsp;1561.519950] [Hardware Error]: PROCESSOR 0:206a7 TIME
        1357862746 SOCKET 0 APIC 1 microcode 28
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519951] [Hardware Error]: Run the above through
        &#39;mcelog --ascii&#39;
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519953] [Hardware Error]: CPU 0: Machine Check
        Exception: 4 Bank 3: be00000000800400
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519955] [Hardware Error]: TSC 539b174de9d ADDR
        3fe98d264ebd MISC 1 <br />
        [&nbsp;&nbsp;&nbsp;1561.519957] [Hardware Error]: PROCESSOR 0:206a7 TIME
        1357862746 SOCKET 0 APIC 0 microcode 28
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519958] [Hardware Error]: Run the above through
        &#39;mcelog --ascii&#39;
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519959] [Hardware Error]: Machine check:
        Processor context corrupt
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519960] Kernel panic - not syncing: Fatal
        Machine check
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519962] Pid: 0, comm: swapper/5 Tainted: P M C O
        3.2.0-35-generic #55-Ubuntu
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519963] Call Trace:
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519964] &lt;#MC&gt; [&lt;ffffffff81644340&gt;]
        panic+0x91/0x1a4
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519971] [&lt;ffffffff8102abeb&gt;]
        mce_panic.part.14+0x18b/0x1c0
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519973] [&lt;ffffffff8102ac80&gt;]
        mce_panic+0x60/0xb0
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519975] [&lt;ffffffff8102aec4&gt;]
        mce_reign+0x1f4/0x200
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519977] [&lt;ffffffff8102b175&gt;]
        mce_end+0xf5/0x100
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519979] [&lt;ffffffff8102b92c&gt;]
        do_machine_check+0x3fc/0x600
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519982] [&lt;ffffffff8136d48f&gt;] ?
        intel_idle+0xbf/0x150
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519984] [&lt;ffffffff8165d78c&gt;]
        machine_check+0x1c/0x30
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519986] [&lt;ffffffff8136d48f&gt;] ?
        intel_idle+0xbf/0x150
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519987] &lt;&lt;EOE&gt;&gt;
        [&lt;ffffffff81509697&gt;] ? menu_select+0xe7/0x2c0
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519991] [&lt;ffffffff815082d1&gt;]
        cpuidle_idle_call+0xc1/0x280
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519994] [&lt;ffffffff8101322a&gt;]
        cpu_idle+0xca/0x120
        <br />
        [&nbsp;&nbsp;&nbsp;1561.519996] [&lt;ffffffff8163aa9a&gt;]
        start_secondary+0xd9/0xdb
        <br />
        [&nbsp;&nbsp;&nbsp;0.682627] Failed to execute / init (error -2)
        <br />
        [&nbsp;&nbsp;&nbsp;0.682777] Kernel panic — not syncing: No working init
        found. Try passing init= option to kernel. See Linux
        Documentation/admin—guide/init.rst for guidance.
        <br />
        [&nbsp;&nbsp;&nbsp;0.682832] CPU: 1 PID: 1 Comm: swapper/0 Not tainted
        4.16.6-2-CHAKRA #2
        <br />
        [&nbsp;&nbsp;&nbsp;0.682875] Hardware name: To Be Filled By O.E.M. To Be
        Filled By O.E.M./IMB-A180, BIOS P1.00 10/09/2013
        <br />
        [&nbsp;&nbsp;&nbsp;0.682921] Call Trace:
        <br />
        [&nbsp;&nbsp;&nbsp;0.682974] &nbsp;dump_stack+0x5c/0x85
        <br />
        [&nbsp;&nbsp;&nbsp;0.683015] &nbsp;? rest_init+0x50/0xd0
        <br />
        [&nbsp;&nbsp;&nbsp;0.683857] &nbsp;panic+8xe4/0x253
        <br />
        [&nbsp;&nbsp;&nbsp;0.683181] &nbsp;?
        do_execveat_common.isra.39+0x87/0x830
        <br />
        [&nbsp;&nbsp;&nbsp;0.683142] &nbsp;? rest_init+0xd0/0xd0
        <br />
        [&nbsp;&nbsp;&nbsp;0.683185] &nbsp;kernel_init+0xeb/0x100
        <br />
        [&nbsp;&nbsp;&nbsp;0.683228] &nbsp;ret_from_fork+0x22/0x40
        <br />
        [&nbsp;&nbsp;&nbsp;0.683305] Kernel Offset: exa0a0aa0 fron
        0xffffffff81000000 location range:
        axffffffff80000000-0xffffffffbfffffff)
        <br />
        [&nbsp;&nbsp;&nbsp;0.683354] ---[ end Kernel panic — not syncing: No
        working init found. Try passing init= option to kernel. See Linux
        Documentation/admin—guide/init.rst for guidance.
      </p>
    </div>

    <style jsx>{`
      .bsod {
        background-color: black;
        background-image: radial-gradient(rgba(15, 15, 15, 0.75), black 120%);
        height: 100vh;
        margin: 0;
        overflow: hidden;
        padding: 2rem;
        color: white;
        font: 1.3rem Inconsolata, monospace;
        text-shadow: 0 0 5px #c8c8c8;
      }
      .bsod::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background: repeating-linear-gradient(
          0deg,
          rgba(black, 0.15),
          rgba(black, 0.15) 1px,
          transparent 1px,
          transparent 2px
        );
        pointer-events: none;
      }
    `}</style>
  </>
)

export default BSOD
