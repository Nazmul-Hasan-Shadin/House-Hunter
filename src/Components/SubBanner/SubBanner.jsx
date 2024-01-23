import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

const SubBanner = () => {
  const [value, setValue] = useState(100);
  const [priceFilter, setPriceFilter] = useState(0);
  return (
    <div>
      <div className="w-2/4 mx-auto relative -translate-y-[450px]">
        <div className=" ">
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Find Your Dream Home</h1>
              <p className="mb-5">We Have Over Million Properties For You</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="w-10/12  absolute top-2/3 translate-x-36  ">
          <Tabs className="">
            <TabList className=" w-10/12  flex justify-center gap-5">
              <Tab>
                {" "}
                <button className="btn px-8 bg-[#274ABB] text-white ">
                  For Sell{" "}
                </button>{" "}
              </Tab>
              <Tab>
                {" "}
                <button className="btn px-8 bg-[#274ABB] text-white ">
                  For Rent{" "}
                </button>{" "}
              </Tab>
            </TabList>

            <TabPanel className="translate-y-28">
              <div className="bg-white p-5 w-10/12">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  action=""
                  className="space-x-2"
                >
                  <input
                    type="text"
                    placeholder="Type here"
                    className="input input-bordered input-md  "
                  />

                  <select className="select select-bordered  max-w-xs">
                    <option disabled selected>
                      Who shot first?
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>

                  <select className="select select-bordered ">
                    <option disabled selected>
                      Location Location
                    </option>
                    <option>Han Solo</option>
                    <option>Greedo</option>
                  </select>
                  {/* modal */}
                  {/* Open the modal using document.getElementById('ID').showModal() method */}
                  <button
                    className="btn"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    advance search
                  </button>
                  <dialog id="my_modal_1" className="modal ">
                    <div className="modal-box lg:max-w-[900px]  lg:mt-96">
                      <h3 className="font-bold text-lg">Hello!</h3>
                      {/* modal content */}
                      <div className="">
                        <div className="flex   flex-col gap-4  justify-around lg:flex-row ">
                          <select className="select select-bordered max-w-md w-full ">
                            <option disabled selected>
                              {" "}
                              BedRoom
                            </option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>

                          <select className="select select-bordered max-w-md w-full ">
                            <option disabled selected>
                              Bathroom{" "}
                            </option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                          </select>

                          <select className="select select-bordered max-w-md w-full ">
                            <option disabled selected>
                              Property Status{" "}
                            </option>

                            <option>Rent</option>
                            <option>Sell</option>
                          </select>
                        </div>
                        {/*============  filter extra grid============================ */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                          <div>
                            <div className="space-y-2">
                              <label
                                className="text-start block"
                                htmlFor="price"
                              >
                                Price Range
                              </label>

                              <input
                                type="range"
                                min={0}
                                max="600"
                                value={value}
                                onChange={(e) => setValue(e.target.value)}
                                className="range range-[blue] h-4"
                              />
                              <p className="text-start"> ${value} </p>
                            </div>
                            <div className="space-y-1">
                              <label htmlFor="price"></label>
                              <input
                                type="range"
                                min={0}
                                max="100"
                                value="40"
                                className="range range-xs"
                              />
                            </div>
                          </div>
                          {/*=================== checked box============ */}
                          <div>
                            <div className="form-control">
                              <label className=" cursor-pointer label">
                                <span className="label-text">tv</span>
                                <input
                                  type="checkbox"
                                  checked="checked"
                                  className="checkbox checkbox-warning"
                                />
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="cursor-pointer label">
                                <span className="label-text">wifi</span>
                                <input
                                  type="checkbox"
                                  checked="checked"
                                  className="checkbox checkbox-warning"
                                />
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="cursor-pointer label">
                                <span className="label-text">ac</span>
                                <input
                                  type="checkbox"
                                  checked="checked"
                                  className="checkbox checkbox-warning"
                                />
                              </label>
                            </div>

                            <div className="form-control">
                              <label className="cursor-pointer label">
                                <span className="label-text">shop</span>
                                <input
                                  type="checkbox"
                                  checked="checked"
                                  className="checkbox checkbox-warning"
                                />
                              </label>
                            </div>
                          </div>
                          <div></div>
                        </div>
                      </div>

                      {/* modal content end */}
                      <div className="modal-action">
                        <form method="dialog">
                          {/* if there is a button in form, it will close the modal */}
                          <button className="btn">Close</button>
                        </form>
                      </div>
                    </div>
                  </dialog>

                  {/* modal end */}

                  <button className="btn px-8 bg-[#274ABB] text-white ">
                    Search{" "}
                  </button>
                </form>
              </div>
            </TabPanel>

            <TabPanel>
              <h2>this dis</h2>
            </TabPanel>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default SubBanner;
